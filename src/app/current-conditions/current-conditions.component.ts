import {Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {toSignal} from '@angular/core/rxjs-interop';
import {WeatherCachingService} from '../weather-caching.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private router: Router = inject(Router);
  public weatherService: WeatherService = inject(WeatherService);
  public weatherCachingService: WeatherCachingService<any> = inject(WeatherCachingService);
  protected locationService: LocationService = inject(LocationService)
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = toSignal(this.weatherService.currentConditionsByZipCode$);

  showForecast(zipcode : string): void{
    this.router.navigate(['/forecast', zipcode])
  }

  removeLocation(index: number): void {
    const zipCode: string = this.currentConditionsByZip()[index].zip;
    this.locationService.removeLocation(zipCode)
    this.weatherCachingService.removeLocation(zipCode)
  }
}
