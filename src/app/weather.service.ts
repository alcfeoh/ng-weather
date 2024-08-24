import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ConditionsAndZip } from './conditions-and-zip.type';
import { CurrentConditions } from './current-conditions/current-conditions.type';
import { Forecast } from './forecasts-list/forecast.type';
import { LocationService } from './location.service';

@Injectable()
export class WeatherService {
  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = signal<ConditionsAndZip[]>([]);
  private http = inject(HttpClient);
  private locationService = inject(LocationService);

  // Convert the Signal<string[]> to Observable<string[]>
  private locations$: Observable<string[]> = toObservable(
    this.locationService.locations, // Remove the parentheses to pass the signal, not the array
  );

  constructor() {
    this.locations$
      .pipe(
        switchMap((locations) => {
          this.handleChangeLocations(locations);
          return EMPTY;
        }),
      )
      .subscribe();
  }

  private handleChangeLocations(locations: string[]): void {
    const CURRENT_ZIPCODES = this.currentConditions().map(
      (currentCondition) => currentCondition.zip,
    );

    locations.forEach((loc) => {
      if (!CURRENT_ZIPCODES.includes(loc)) {
        this.addCurrentConditions(loc);
      }
    });

    CURRENT_ZIPCODES.forEach((zip) => {
      if (!locations.includes(zip)) {
        this.removeCurrentConditions(zip);
      }
    });
  }

  addCurrentConditions(zipcode: string): void {
    // Here we make a request to get the current conditions data from the API.
    // Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`;

    this.http.get<CurrentConditions>(url).subscribe({
      next: (data) => {
        this.currentConditions.update((conditions) => [
          ...conditions,
          { zip: zipcode, data },
        ]);
      },
      error: () => {
        this.locationService.removeLocation(zipcode);
        alert(`Failed to fetch weather data for ${zipcode}`);
      },
    });
  }

  removeCurrentConditions(zipcode: string) {
    this.currentConditions.update((conditions) => {
      return conditions.filter((condition) => condition.zip !== zipcode);
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API.
    // Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(
      `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`,
    );
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + 'art_storm.png';
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + 'art_rain.png';
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + 'art_light_rain.png';
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + 'art_snow.png';
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + 'art_clouds.png';
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + 'art_fog.png';
    else return WeatherService.ICON_URL + 'art_clear.png';
  }
}
