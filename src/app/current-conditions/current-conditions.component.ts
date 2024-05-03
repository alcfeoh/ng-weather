import {Component, effect, inject, OnInit, Signal} from '@angular/core';
import {Router} from '@angular/router';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {LocationService} from '../location.service';
import {WeatherService} from '../weather.service';
import {combineLatest, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
    this.weatherService.getCurrentConditions();

  ngOnInit(): void {

    this.weatherService.resetCurrentConditions();
    this.locationService.locations().map((zipcode) => {
      this.weatherService.getConditionByZipcode(zipcode).pipe(map((data) => {
        this.weatherService.addCondition(zipcode, data);
      })).subscribe();
    });
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
