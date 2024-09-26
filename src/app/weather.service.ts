import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Observable, zip} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from './current-conditions/current-conditions.type';
import {ConditionsAndZip} from './conditions-and-zip.type';
import {Forecast} from './forecasts-list/forecast.type';
import { CacheStorageService } from './cache-storage.service';

@Injectable()
export class WeatherService {

  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = signal<ConditionsAndZip[]>([]);
  private cacheStorageService = inject(CacheStorageService);
  
  constructor(private http: HttpClient) { }

  addCurrentConditions(zipcode: string): void {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    //the app won’t make HTTP requests for any single location more than once every 2 hours.
    let currentConditionsCachedForZip = this.cacheStorageService.getCache('currentConditions' + zipcode) as ConditionsAndZip[];
    if (currentConditionsCachedForZip) {
console.log('cached current conditions found for zip: ' + zipcode);      
      const existingConditionIndex = this.currentConditions().findIndex(condition => condition.zip === zipcode);
      
      //found existing condition in the currentConditions
      if (existingConditionIndex !== -1) {
        // Update the existing current condition from the cache
        this.currentConditions.update(conditions => {
          const updatedConditions = [...conditions];
          updatedConditions[existingConditionIndex] = currentConditionsCachedForZip[0];
          return updatedConditions;
        });
      } else {
        // existing condition not found in the currentConditions
        // Add the new current condition from the cache
        this.currentConditions.update(conditions => [...conditions, ...currentConditionsCachedForZip]);
      }
      //current condition data has been added or updated from the cache
      //don't get data from http request      
      return;
    }

console.log('http request to get current conditions. no cached data found for zip: ' + zipcode);
    this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
      .subscribe(data => {
        const existingConditionIndex = this.currentConditions().findIndex(condition => condition.zip === zipcode);

        //found existing condition in the currentConditions
        if (existingConditionIndex !== -1) { 
          // Update the existing current condition from the cache
          this.currentConditions.update(conditions => {
            const updatedConditions = [...conditions];
            updatedConditions[existingConditionIndex] = { zip: zipcode, data };
            return updatedConditions;
          });
        } else {
        // existing condition not found in the currentConditions
        // Add the new current condition from the http get request
          this.currentConditions.update(conditions => [...conditions, { zip: zipcode, data }]);
        }
        this.cacheStorageService.removeItem('currentConditions' + zipcode);
        // Cache the current conditions for the zipcode
        this.cacheStorageService.setCache('currentConditions' + zipcode, 
          this.currentConditions().filter(x => x.zip === zipcode)); 
      }
    );
  }

  removeCurrentConditions(zipcode: string) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode)
          conditions.splice(+i, 1);
      }
      return conditions;
    })
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }

}
