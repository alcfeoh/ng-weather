import { Component, inject } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import {Forecast} from './forecast.type';
import { CacheStorageService } from '../cache-storage.service';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: Forecast;
  private cacheStorageService = inject(CacheStorageService);

  constructor(protected weatherService: WeatherService, route : ActivatedRoute) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
          //the app won’t make HTTP requests for any single location more than once every 2 hours.

      let forecastCachedForZip = this.cacheStorageService.getCache('forecast' + this.zipcode) as Forecast;
console.table(forecastCachedForZip);      
      if (forecastCachedForZip) {
console.log('cached forecast found for zip: ' + this.zipcode);      
        this.forecast = forecastCachedForZip;
        //current condition data has been added or updated from the cache
        //don't get data from http request      
        return;
      }      

console.log('http request to get forecast. no cached forecast found for zip: ' + this.zipcode);
      weatherService.getForecast(this.zipcode)
        .subscribe(data => {
          this.forecast = data;
          this.cacheStorageService.removeItem('forecast' + this.zipcode);
          // cache the forecast for the zipcode          
          this.cacheStorageService.setCache('forecast' + this.zipcode, this.forecast); 
        });
      });
  }
}
