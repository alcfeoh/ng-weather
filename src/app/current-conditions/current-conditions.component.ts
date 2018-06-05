import { Component } from '@angular/core';
import {selectCurrentConditionsMap, selectZipcodeList, State} from '../reducers/index';
import {Store} from '@ngrx/store';
import {RemoveZipcode} from '../actions/zipcode.actions';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipcodes: Array<String>;
  currentConditions: Map<string, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectZipcodeList)
          .subscribe(zips => this.zipcodes = zips);

    store.select(selectCurrentConditionsMap)
        .subscribe(conditions => this.currentConditions = conditions);
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  removeZip(zip: string) {
    this.store.dispatch(new RemoveZipcode(zip));
  }

}
