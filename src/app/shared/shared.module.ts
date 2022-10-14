import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    ButtonComponent,
    CountrySelectComponent,
  ],
  exports: [
    ButtonComponent,
    CountrySelectComponent,
  ]
})
export class SharedModule { }