import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    public weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  addLocation() {
    if (this.form.valid) {
      const zipcode = this.form.value.zipcode;
      const countryCode = this.form.value.country?.code;

      this.locationService.addLocation({ zipcode, countryCode });
      this.form.reset();
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      zipcode: [null, Validators.required],
      country: [null, Validators.required],
    });
  }
}
