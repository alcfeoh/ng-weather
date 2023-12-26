import { Injectable, Signal, signal, WritableSignal } from '@angular/core'
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { CurrentConditions } from '../current-conditions/current-conditions.type'
import { ConditionsAndZip } from '../types/conditions-and-zip.type'
import { Forecast } from '../forecasts-list/forecast.type'
import { LocationService } from './location.service'
import { StorageService } from './storage.service'
import { ForecastAndZip } from '../types/forecast-and-zip.type'

@Injectable()
export class WeatherService {
    public _currentForecast: BehaviorSubject<Forecast | null> =
        new BehaviorSubject<Forecast | null>(null)
    public locationSubscription: Subscription

    private _loadingForecast: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(true)
    private static APPID: string = '5a4b2d457ecbef9eb2a71e480b947604'
    private currentConditions: WritableSignal<ConditionsAndZip[]> = signal<
        ConditionsAndZip[]
    >([])
    private readonly CURRENT_CONDITIONS_KEY: string = 'currentConditions'
    private currentForecasts: WritableSignal<ForecastAndZip[]> = signal<
        ForecastAndZip[]
    >([])
    private readonly CURRENT_FORECASTS_KEY: string = 'currentForecasts'
    private expiresInSeconds: number = 1000 * 7200 // Change 7200 (2 hours in seconds) to modify expiration time
    private static ICON_URL: string =
        'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/'
    private static URL: string = 'http://api.openweathermap.org/data/2.5'

    constructor(
        private http: HttpClient,
        private locationService: LocationService,
        private storageService: StorageService
    ) {
        this.locationSubscription = this.locationService.locations$.subscribe(
            (locations) => {
                this.currentConditions.set([]) // Reset current conditions
                const filteredLocations: string[] = locations
                    .filter(
                        (value, index) => locations.indexOf(value) === index
                    )
                    .filter((value) => value !== '') // Filter out duplicates and empty values
                for (const loc of filteredLocations) {
                    this.updateCurrentConditions(loc)
                }
            }
        )
    }

    public getCurrentConditions(): Signal<ConditionsAndZip[]> {
        return this.currentConditions.asReadonly()
    }

    public getForecastByZipCode(zipCode: string): void {
        this._loadingForecast.next(true)
        if (!this.foundInForecastCache(zipCode)) {
            this.getForecast$(zipCode)
                .pipe(tap(() => this._loadingForecast.next(false)))
                .subscribe((data) => {
                    this.currentForecasts.update((forecasts) => [
                        ...forecasts,
                        {
                            zip: zipCode,
                            data,
                            dt: Date.now(),
                            expiresIn: this.expiresInSeconds,
                        },
                    ])
                    this._currentForecast.next(data)
                    this.storageService.setItem(
                        this.CURRENT_FORECASTS_KEY,
                        this.currentForecasts()
                    )
                })
        }
    }

    get currentForecast$(): Observable<Forecast> {
        return this._currentForecast.asObservable()
    }

    get loadingForecast$(): Observable<boolean> {
        return this._loadingForecast.asObservable()
    }

    private getForecast$(zipCode: string): Observable<Forecast> {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get<Forecast>(
            `${WeatherService.URL}/forecast/daily?zip=${zipCode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
        )
    }

    public getWeatherIcon(id: number): string {
        switch (true) {
            case id >= 200 && id <= 232:
                return WeatherService.ICON_URL + 'art_storm.png'
            case id >= 501 && id <= 511:
                return WeatherService.ICON_URL + 'art_rain.png'
            case id === 500 || (id >= 520 && id <= 531):
                return WeatherService.ICON_URL + 'art_light_rain.png'
            case id >= 600 && id <= 622:
                return WeatherService.ICON_URL + 'art_snow.png'
            case id >= 801 && id <= 804:
                return WeatherService.ICON_URL + 'art_clouds.png'
            case id === 741 || id === 761:
                return WeatherService.ICON_URL + 'art_fog.png'
            default:
                return WeatherService.ICON_URL + 'art_clear.png'
        }
    }

    private isNotExpired(
        dateTimestamp: number,
        expiresInTimestamp: number
    ): boolean {
        return (
            Math.round(Date.now() / 1000) < dateTimestamp + expiresInTimestamp
        )
    }

    private foundInForecastCache(zipCode: string): boolean {
        let foundInCache: boolean = false
        const cachedForecasts: ForecastAndZip[] = JSON.parse(
            this.storageService.getItem(this.CURRENT_FORECASTS_KEY)
        )
        if (cachedForecasts) {
            for (let forecastAndZip of cachedForecasts) {
                if (
                    forecastAndZip.zip === zipCode &&
                    this.isNotExpired(
                        forecastAndZip.dt,
                        forecastAndZip.expiresIn
                    )
                ) {
                    foundInCache = true
                    this._currentForecast.next(forecastAndZip.data)
                    this._loadingForecast.next(false)
                }
            }
        }
        return foundInCache
    }

    private foundInLocationCache(zipCode: string): boolean {
        let foundInCache: boolean = false
        const cachedConditions: ConditionsAndZip[] = JSON.parse(
            this.storageService.getItem(this.CURRENT_CONDITIONS_KEY)
        )
        if (cachedConditions) {
            for (let condition of cachedConditions) {
                if (
                    condition.zip === zipCode &&
                    this.isNotExpired(condition.data.dt, condition.expiresIn)
                ) {
                    foundInCache = true
                    this.setCondition(
                        zipCode,
                        condition.data,
                        Date.now() / 1000,
                        condition.expiresIn
                    )
                }
            }
        }
        return foundInCache
    }

    private setCondition(
        zipCode: string,
        data: CurrentConditions,
        lastAccessed: number,
        expiresInSecond?: number
    ): void {
        this.currentConditions.update((conditions) => [
            ...conditions,
            {
                zip: zipCode,
                data,
                expiresIn: expiresInSecond ?? this.expiresInSeconds,
                lastAccessed: lastAccessed,
            },
        ])
        this.storageService.setItem(
            this.CURRENT_CONDITIONS_KEY,
            this.currentConditions()
        )
    }

    private updateCurrentConditions(zipCode: string): void {
        if (!this.foundInLocationCache(zipCode)) {
            // Here we make a request to get the current conditions data from the API.
            // Note the use of backticks and an expression to insert the zipcode
            this.http
                .get<CurrentConditions>(
                    `${WeatherService.URL}/weather?zip=${zipCode},us&units=imperial&APPID=${WeatherService.APPID}`
                )
                .subscribe((data) => {
                    this.setCondition(zipCode, data, Date.now() / 1000)
                })
        }
    }
}
