import {Component, inject, Signal} from '@angular/core';
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
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  currentConditionsByZip$ = toObservable(this.currentConditionsByZip);
  locations$ = this.locationService.getLocationsObservable();
  private tabService = inject(TabService);
  protected currentSelectedTab: Signal<string> = this.tabService.selectedTab;
  protected currentSelectedZipConditions: Signal<ConditionsAndZip>;

  constructor() {
    this.locations$.subscribe(locations => {
      let i: number = 0;
      for (let loc of locations) {
        this.weatherService.addCurrentConditions(loc);   
        if (i === 0) {
          this.tabService.selectTab(loc);
          this.activeTab();
        }
        i++;
      }
    });
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  activeTab() {
    let selectedTab = this.currentConditionsByZip().filter(conditions => conditions.zip === this.currentSelectedTab());
    return selectedTab;
  }
}
