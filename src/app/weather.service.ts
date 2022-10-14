import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export interface LocationAttributes {
  countryCode: string;
  zipcode: string;
}

export interface LocationConditions extends LocationAttributes {
  data$: Observable<any>;
}

@Injectable()
export class WeatherService {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions: LocationConditions[] = [];
  
  private isAddingState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get isAdding$(): Observable<boolean> {
    return this.isAddingState.asObservable();
  }

  constructor(private http: HttpClient) { }

  addCurrentConditions({ countryCode, zipcode }: LocationAttributes, isNew: boolean, refreshInterval: number = 30000): void {
    if (isNew) {
      this.isAddingState.next(true);
    }

    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.currentConditions.push({
      countryCode,
      zipcode,
      data$: timer(0, refreshInterval).pipe(
        switchMap(() => this.http.get(
          `${WeatherService.URL}/weather?zip=${zipcode},${countryCode}&units=imperial&APPID=${WeatherService.APPID}`,
        )),
        tap(() => {
          if (isNew && this.isAddingState.value) {
            this.isAddingState.next(false);
          }
        })
      )
    });
  }

  removeCurrentConditions({ countryCode, zipcode }: LocationAttributes) {
    for (let i in this.currentConditions){
      if (this.currentConditions[i].zipcode === zipcode && this.currentConditions[i].zipcode === countryCode)
        this.currentConditions.splice(+i, 1);
    }
  }

  getCurrentConditions(): LocationConditions[] {
    return this.currentConditions;
  }

  getForecast(zipcode: string): Observable<any> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);

  }

  getWeatherIcon(id){
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
