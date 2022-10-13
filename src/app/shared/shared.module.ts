import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ]
})
export class SharedModule { }