import { Component, inject, Signal } from '@angular/core'
import { WeatherService } from '../weather.service'
import { LocationService } from '../location.service'
import { Router } from '@angular/router'
import { ConditionsAndZip } from '../conditions-and-zip.type'

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
    protected locationService = inject(LocationService)
    private weatherService = inject(WeatherService)
    private router = inject(Router)
    protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
        this.weatherService.getCurrentConditions()

    showForecast(zipcode: string) {
        this.router.navigate(['/forecast', zipcode])
    }
}
