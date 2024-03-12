import {inject, Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from './current-conditions/current-conditions.type';
import {Forecast} from './forecasts-list/forecast.type';
import {map, mergeMap, switchMap, take, toArray} from 'rxjs/operators';
import {LocationService} from './location.service';
import {toObservable} from '@angular/core/rxjs-interop';
import {ConditionsAndZip} from './conditions-and-zip.type';
import {WeatherCachingService} from './weather-caching.service';

@Injectable()
export class WeatherService {

  static URL: string = 'http://api.openweathermap.org/data/2.5';
  static APPID: string = '5a4b2d457ecbef9eb2a71e480b947604';

  private httpClient: HttpClient = inject(HttpClient);
  private locationService: LocationService = inject(LocationService);
  private weatherCachingService: WeatherCachingService<ConditionsAndZip> = inject(WeatherCachingService);

  readonly currentConditionsByZipCode$: Observable<ConditionsAndZip[]> =
    toObservable(this.locationService.locations).pipe(
      switchMap((zipcodes: string[]) => from(zipcodes).pipe(
          take(zipcodes.length),
          mergeMap(
              (zipcode: string) => {
                const conditionsAndZipCached: ConditionsAndZip = this.weatherCachingService.getData(zipcode)
                if (conditionsAndZipCached) {
                  return of(conditionsAndZipCached)
                }
                return this.addCurrentConditions(zipcode).pipe(
                    map((data: CurrentConditions): ConditionsAndZip => {
                      const conditionsAndZip: ConditionsAndZip = {zip: zipcode, data}
                      this.weatherCachingService.cacheData(zipcode, conditionsAndZip)
                      return conditionsAndZip
                    })
                )
              }
          ),
          toArray()
      )
    )
  )

  addCurrentConditions(zipcode: string): Observable<CurrentConditions> {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.httpClient.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.httpClient.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);

  }

}
