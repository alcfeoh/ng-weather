import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {AddZipcode} from '../actions/zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  @Output()
  zipAdded = new EventEmitter<string>();

}
