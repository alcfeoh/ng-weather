import {Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { toObservable } from '@angular/core/rxjs-interop';

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

  constructor() {
    this.locations$.subscribe(locations => {
    for (let loc of locations)
      this.weatherService.addCurrentConditions(loc);   
    });
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
