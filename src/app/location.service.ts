import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CacheStorageService } from './cache-storage.service';
export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

  private locations: string[] = [];
  // store zipcode locations in RXJS Subject
  // this Subject will emit the updated list of locations whenever there is a change to the locations
  private locations$: Subject<string[]> = new Subject<string[]>();
  private cacheStorageService = inject(CacheStorageService);
  constructor() {}

  addLocation(zipcode: string) {
     let cachedLocations = this.cacheStorageService.getCache(LOCATIONS);    
    if (cachedLocations && cachedLocations.length > 0) {
      this.cacheStorageService.removeItem(LOCATIONS);
      this.cacheStorageService.setCache(LOCATIONS, cachedLocations.concat(zipcode)); 
      this.locations$.next(cachedLocations.concat(zipcode));  
    } else {
      this.locations.push(zipcode);
      // add location to RXJS Subject
      this.locations$.next(this.locations);
      this.cacheStorageService.removeItem(LOCATIONS);
      this.cacheStorageService.setCache(LOCATIONS, this.locations);
    } 
  }

  removeLocation(zipcode: string) {
    this.locations = this.locations.filter(location => location !== zipcode);    
    // remove location from RXJS Subject that was filtered out of the locations array
    // if there are no locations, add an empty string array to the locations Subject
    this.locations$.next(this.locations.length > 0 ? this.locations : ['']);
    let cachedLocations = this.cacheStorageService.getCache(LOCATIONS);
    if (cachedLocations && cachedLocations.length > 0) {
      this.cacheStorageService.removeItem(LOCATIONS);
      this.cacheStorageService.setCache(LOCATIONS, cachedLocations.filter(location => location !== zipcode)); 
      this.locations$.next(cachedLocations.filter(location => location !== zipcode));   
    }
  }

  getLocationsObservable() {
    return this.locations$.asObservable();
  }
}
