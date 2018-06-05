import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectForecast, State} from '../reducers';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  forecast: any;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectForecast).subscribe((fcast) => this.forecast = fcast);
  }
}
