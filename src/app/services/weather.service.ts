import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Forecast } from 'app/types/forecast.type';
import { ConditionsAndZip } from '../types/conditions-and-zip.type';
import { CurrentConditions } from '../types/current-conditions.type';
import { CacheService } from './cache.service';
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
  private cacheService = inject(CacheService);

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
    const cacheKey = `weather-current-${zipcode}`;
    const cachedData = this.cacheService.getItem<CurrentConditions>(cacheKey);

    if (cachedData) {
      this.currentConditions.update((conditions) => [
        ...conditions,
        { zip: zipcode, data: cachedData },
      ]);
    } else {
      const url = `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`;
      this.http.get<CurrentConditions>(url).subscribe({
        next: (data) => {
          this.cacheService.setItem(cacheKey, data, 7200); // Cache for 7200 seconds (2 hours)
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
  }

  removeCurrentConditions(zipcode: string) {
    const cacheKey = `weather-current-${zipcode}`;
    this.cacheService.removeItem(cacheKey);
    this.currentConditions.update((conditions) => {
      return conditions.filter((condition) => condition.zip !== zipcode);
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    const cacheKey = `weather-forecast-${zipcode}`;
    const cachedData = this.cacheService.getItem<Forecast>(cacheKey);

    if (cachedData) {
      return new Observable<Forecast>((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      const url = `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`;
      return this.http.get<Forecast>(url).pipe(
        switchMap((data) => {
          this.cacheService.setItem(cacheKey, data, 7200); // Cache for 7200 seconds (2 hours)
          return new Observable<Forecast>((observer) => {
            observer.next(data);
            observer.complete();
          });
        }),
      );
    }
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
