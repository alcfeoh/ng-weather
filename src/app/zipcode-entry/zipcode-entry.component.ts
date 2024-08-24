import { Component, inject } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  private readonly locationService = inject(LocationService);

  addLocation(zipcodeInput: HTMLInputElement) {
    const ZIPCODE = zipcodeInput.value;
    const VALIDATION_ERROR = this.validateZipcode(ZIPCODE);
    if (VALIDATION_ERROR) {
      this.showError(VALIDATION_ERROR);
      return;
    }

    this.locationService.addLocation(ZIPCODE);
    zipcodeInput.value = ''; // Clear the input after adding location
  }

  private validateZipcode(zipcode: string): string | null {
    if (!zipcode) {
      return 'The zip code is invalid. Please enter a 5-digit zip code.';
    }

    const IS_VALID_ZIPCODE = /^\d{5}$/.test(zipcode);
    if (!IS_VALID_ZIPCODE) {
      return 'The zip code is invalid. Please enter a 5-digit zip code.';
    }

    const existingLocations = this.locationService.locations();
    if (existingLocations.includes(zipcode)) {
      return 'This zip code has already been added.';
    }

    return null;
  }

  private showError(message: string) {
    alert(message);
    // Optimization : replace alert with a more sophisticated notification service.
    // => this.notificationService.showError(message);
  }
}
