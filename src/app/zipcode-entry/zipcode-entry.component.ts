import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {AddZipcode} from '../zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(private store: Store<State>) { }

  addLocation(zipcode : string){
    this.store.dispatch(new AddZipcode(zipcode));
  }

}
