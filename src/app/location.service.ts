import { Injectable, Signal, signal } from '@angular/core';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private locationsSignal = signal<string[]>([]);

  constructor() {
    const LOCATIONS_STRING = localStorage.getItem(LOCATIONS);
    if (LOCATIONS_STRING)
      this.locationsSignal.set(JSON.parse(LOCATIONS_STRING));
  }

  get locations(): Signal<string[]> {
    return this.locationsSignal.asReadonly();
  }

  addLocation(zipcode: string) {
    this.locationsSignal.update((locations) => [...locations, zipcode]);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsSignal()));
  }

  removeLocation(zipcode: string) {
    this.locationsSignal.update((locations) =>
      locations.filter((location) => location !== zipcode),
    );
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsSignal()));
  }
}
