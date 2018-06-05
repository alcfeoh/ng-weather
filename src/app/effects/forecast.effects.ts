import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs/index';
import {catchError, map, mergeMap, filter} from 'rxjs/operators';
import {WeatherService} from '../weather.service';
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {ForecastLoaded, ForecastLoadFailed} from '../actions/forecast.actions';

@Injectable()
export class ForecastEffects {

    @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        filter(action => action.payload.event.url.startsWith('/forecast')),
        mergeMap(action => {
              let zipcode = action.payload.event.url.split('/').pop();
              return this.weatherService.getForecast(zipcode).pipe(
                  // If successful, dispatch success action with result
                  map(data => new ForecastLoaded(data)),
                  // If request fails, dispatch failed action
                  catchError((err) => of(new ForecastLoadFailed(zipcode, err)))
              )
            }
        )
    );

    constructor(private actions$: Actions<RouterNavigationAction>, private weatherService: WeatherService) {}
}
