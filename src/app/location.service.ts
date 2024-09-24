import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

  private locations: string[] = [];
  private locations$: Subject<string[]> = new Subject<string[]>();

  constructor() {}

  addLocation(zipcode: string) {
    this.locations.push(zipcode);
    this.locations$.next(this.locations);
  }

  removeLocation(zipcode: string) {
    this.locations = this.locations.filter(location => location !== zipcode);
    this.locations$.next(this.locations.length > 0 ? this.locations : ['']);
  }

  getLocationsObservable() {
    return this.locations$.asObservable();
  }
}
