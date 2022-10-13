import { Component } from '@angular/core';

import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(
    private locationService: LocationService,
    public weatherService: WeatherService,
  ) { }

  addLocation(zipcode : string){
    this.locationService.addLocation(zipcode);
  }
}
