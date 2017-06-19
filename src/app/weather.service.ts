import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {

  private currentConditions = [];

  constructor(private http: Http) { }

  addCurrentConditions(zipcode : string) : void {
    this.http.get(`./assets/weather.json`)
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    //this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=5a4b2d457ecbef9eb2a71e480b947604`)
      .map(res => res.json())
      .subscribe(data => this.currentConditions.push({zip: zipcode, data: data}) );
  }

  getCurrentConditions() : any[] {
    return this.currentConditions;
  }

  getForecast(zipcode : string) : Observable<any> {
    return this.http.get(`./assets/weather.json`)
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    //this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=5a4b2d457ecbef9eb2a71e480b947604`)
      .map(res => res.json());

  }
}
