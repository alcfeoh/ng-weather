import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  constructor(private weatherService : WeatherService) {
  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

}
