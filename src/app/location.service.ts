import { Injectable } from '@angular/core';

import { LocationAttributes, WeatherService } from './weather.service';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {
  readonly locationKeySplitter = '-';

  private locationsKeys: string[] = [];

  constructor(private weatherService: WeatherService) {
    let locString = localStorage.getItem(LOCATIONS);

    if (locString)
      this.locationsKeys = JSON.parse(locString);
    for (let locationKey of this.locationsKeys)
      this.weatherService.addCurrentConditions(this.parseLocationKey(locationKey), false);
  }

  addLocation(locationAttributes: LocationAttributes){
    this.locationsKeys.push(this.getLocationKey(locationAttributes));
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsKeys));
    this.weatherService.addCurrentConditions(locationAttributes, true);
  }

  removeLocation(locationAttributes: LocationAttributes){
    let index = this.locationsKeys.indexOf(this.getLocationKey(locationAttributes));
    
    if (index !== -1){
      this.locationsKeys.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsKeys));
      this.weatherService.removeCurrentConditions(locationAttributes);
    }
  }

  private getLocationKey({ countryCode, zipcode }: LocationAttributes): string {
    return `${countryCode}${this.locationKeySplitter}${zipcode}`
  }

  private parseLocationKey(locationKey: string): LocationAttributes {
    const locationKeyParts = locationKey.split(this.locationKeySplitter);

    return {
      countryCode: locationKeyParts[0], 
      zipcode: locationKeyParts[1]
    };
  }
}
