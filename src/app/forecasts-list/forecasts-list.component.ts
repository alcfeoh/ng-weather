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
      let forecast = this.cacheStorageService.getCache('forecast');
      if (forecast) {
        this.forecast = forecast;
        return;
      }
console.log('getting forecast data http request');      
      weatherService.getForecast(this.zipcode)
        .subscribe(data => {
          this.forecast = data;
          this.cacheStorageService.removeItem('forecast');
          this.cacheStorageService.setCache('forecast', this.forecast); 
        });
      });
  }
}
