import {Injectable, signal} from '@angular/core';
export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  locations = signal<string[]>([]);

  constructor() {
    const locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations.set(JSON.parse(locString));
    }
  }

  addLocation(zipcode: string): void {
    if (this.locations().includes(zipcode)) {
      alert(`You entered a location ${zipcode} already exists! Please try different one.`);
      return;
    }

    this.locations.update((zipcodes) => [...zipcodes, zipcode]);
    this.saveLocations();
  }

  removeLocation(zipcode: string): void {
    const index = this.locations().indexOf(zipcode);
    if (index !== -1) {
      this.locations.update((zipcodes) => zipcodes.filter((item) => item !== zipcode));
      this.saveLocations();
    }
  }

  private saveLocations(): void {
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations()));
  }
}
