import { Component, computed, inject, Signal } from '@angular/core'
import { WeatherService } from '../services/weather.service'
import { LocationService } from '../services/location.service'
import { ConditionsAndZip } from '../types/conditions-and-zip.type'

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
    protected currentConditionsByZipSortedByTimestamp: Signal<
        ConditionsAndZip[]
    > = computed(() => {
        if (this.currentConditionsByZip().length > 1) {
            this.currentConditionsByZip().sort((a, b) =>
                a.lastAccessed < b.lastAccessed
                    ? -1
                    : a.lastAccessed > b.lastAccessed
                      ? 1
                      : 0
            )
        }
        return this.currentConditionsByZip()
    })
    protected displayTabs: Signal<boolean> = computed(
        () => this.currentConditionsByZipSortedByTimestamp().length > 0
    )
    protected locationService: LocationService = inject(LocationService)
    protected weatherService: WeatherService = inject(WeatherService)

    private currentConditionsByZip: Signal<ConditionsAndZip[]> =
        this.weatherService.getCurrentConditions()
}
