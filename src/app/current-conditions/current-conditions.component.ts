import {Component, inject, Signal, WritableSignal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { toObservable } from '@angular/core/rxjs-interop';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: WritableSignal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  //TODO: revert the above to a readonly signal
  //create a new writable signal from the readonly signal and use that to display the current conditions
  //so the currentConditionsbyZip signal can be updated.
  //not a good idea to expose the current conditions signal as writable in the weather service  
  currentConditionsByZip$ = toObservable(this.currentConditionsByZip);
  locations$ = this.locationService.getLocationsObservable();
  private tabService = inject(TabService);
  protected currentSelectedTab: Signal<string> = this.tabService.selectedTab;
  protected currentSelectedZipConditions: Signal<ConditionsAndZip>;

  constructor() {
    this.locations$.subscribe(locations => {
console.log('locations: ' + locations);      
      let i: number = 0;
      for (let loc of locations) {
        this.weatherService.addCurrentConditions(loc);   
        if (i === 0) {
          //select first tab on initial load to show content of first tab
          this.tabService.selectTab(loc);
          this.activeTab();
        }
        i++;
      }
      //update currentConditionsByZip to filter only the zipcodes that are in the locations array
      this.currentConditionsByZip.update(() => {
        return this.currentConditionsByZip().filter(condition => locations.includes(condition.zip));
      });      
    });
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  activeTab() {
    //return current selected tab to show tab contents for the selected tab
    return this.currentConditionsByZip().filter(conditions => conditions.zip === this.currentSelectedTab());
  }
}
