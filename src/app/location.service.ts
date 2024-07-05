import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";
import { BehaviorSubject } from 'rxjs';
import { LocationUpdate } from './conditions-and-zip.type';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations : string[] = [];
  locationUpdate = new BehaviorSubject<LocationUpdate>(null);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
    for (let loc of this.locations){
      const locationData : LocationUpdate = { action :'add', zip : loc};
      this.locationUpdate.next(locationData);
    }
      // this.weatherService.addCurrentConditions(loc);
  }

  addLocation(zipcode : string) {
    this.locations.push(zipcode);
    this.locationUpdate.next({action : 'add' , zip :zipcode});
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    // this.weatherService.addCurrentConditions(zipcode);
  }

  removeLocation(zipcode : string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      this.locationUpdate.next({action : 'remove' , zip :zipcode});
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      // this.weatherService.removeCurrentConditions(zipcode);
    }
  }
}
