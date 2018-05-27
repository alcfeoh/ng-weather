import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipcodes: Array<String>;

  constructor() {
  }

}
