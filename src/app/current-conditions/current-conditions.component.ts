import { Component } from '@angular/core';
import {State} from '../reducers/index';
import {Store} from '@ngrx/store';
import {RemoveZipcode} from '../zipcode.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
''
  zipcodes: Array<String>;

  constructor(private store: Store<State>) {
    store.select(state => state.zipcodes)
          .subscribe(zips => this.zipcodes = zips.zipcodes);
  }

  removeZip(zip: string) {
    this.store.dispatch(new RemoveZipcode(zip));
  }

}
