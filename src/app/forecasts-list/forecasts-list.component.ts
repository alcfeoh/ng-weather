import {Component, inject} from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Forecast} from './forecast.type';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  private readonly weatherService: WeatherService = inject(WeatherService)
  forecast$: Observable<Forecast>;

  ngOnInit() {
    this.forecast$ = this.route.params.pipe(
        switchMap((params: Params) => this.weatherService.getForecast(params['zipcode']))
    )
  }
}
