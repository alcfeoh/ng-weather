import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

  private locations: string[] = [];
  // store zipcode locations in RXJS Subject
  // this Subject will emit the updated list of locations whenever there is a change to the locations
  private locations$: Subject<string[]> = new Subject<string[]>();
  constructor() {}

  addLocation(zipcode: string) {
    this.locations.push(zipcode);
    // add location to RXJS Subject
    this.locations$.next(this.locations);
  }

  removeLocation(zipcode: string) {
    this.locations = this.locations.filter(location => location !== zipcode);   

    // remove location from RXJS Subject that was filtered out of the locations array
    // if there are no locations, add an empty string array to the locations Subject
    this.locations$.next(this.locations.length > 0 ? this.locations : ['']);
  }

  getLocationsObservable() {
    return this.locations$.asObservable();
  }
}
