import { Component } from '@angular/core'
import { WeatherService } from '../services/weather.service'
import { ActivatedRoute } from '@angular/router'
import { Forecast } from './forecast.type'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'

@Component({
    selector: 'app-forecasts-list',
    templateUrl: './forecasts-list.component.html',
    styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent {
    public currentForecast: Forecast
    public currentForecastSubscription: Subscription
    public loadingForecast$: Observable<boolean>

    private _zipcode: BehaviorSubject<string> = new BehaviorSubject<string>('')

    constructor(
        protected weatherService: WeatherService,
        route: ActivatedRoute
    ) {
        route.params.subscribe((params) => {
            this._zipcode.next(params['zipcode'])
        })
        this.zipCode$.subscribe((value) => {
            if (value) {
                this.currentForecastSubscription =
                    this.weatherService.currentForecast$.subscribe(
                        (forecast) => {
                            this.currentForecast = forecast
                        }
                    )
                this.weatherService.getForecastByZipCode(value)
            }
        })
        this.loadingForecast$ = weatherService.loadingForecast$
    }

    get zipCode$(): Observable<string> {
        return this._zipcode.asObservable()
    }
}
