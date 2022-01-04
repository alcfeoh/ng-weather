import { Component, OnDestroy, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit, OnDestroy {
  currentConditions: Observable<any>[] | undefined;
  subControl = new Subject();

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private router: Router) {
  }

  ngOnInit() {
    this.getCurrentConditions();
  }

  getCurrentConditions(): void {
    this.weatherService.getCurrentConditionsObs()
      .pipe(takeUntil(this.subControl))
      .subscribe(conditions => {
        this.currentConditions = Array.from(conditions.values());
      });
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }

  removeLocation(locationZip: string): void {
    this.locationService.removeLocation(locationZip);
  }

  getIcon(locationWeatherId: string): string {
    return this.weatherService.getWeatherIcon(locationWeatherId);
  }

  ngOnDestroy(): void {
    this.subControl.next();
  }
}
