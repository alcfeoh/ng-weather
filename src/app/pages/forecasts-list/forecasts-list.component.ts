import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'app/services/weather.service';
import { Forecast } from '../../types/forecast.type';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrl: './forecasts-list.component.css',
})
export class ForecastsListComponent {
  protected weatherService = inject(WeatherService);
  private route = inject(ActivatedRoute);
  zipcode: string;
  forecast: Forecast;

  constructor() {
    this.route.params.subscribe((params) => {
      this.zipcode = params['zipcode'];
      this.weatherService
        .getForecast(this.zipcode)
        .subscribe((data) => (this.forecast = data));
    });
  }
}
