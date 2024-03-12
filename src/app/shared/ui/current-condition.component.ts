import {Component, Input} from '@angular/core';
import {ConditionsAndZip} from '../../conditions-and-zip.type';
import {DecimalPipe} from '@angular/common';
import {WeatherIconPipePipe} from '../../pipes/weather-icon.pipe';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-current-condition',
    standalone: true,
    imports: [
        DecimalPipe,
        WeatherIconPipePipe,
        RouterLink
    ],
    template: `
        <div class="flex">
            <div>
                <h4>Current conditions: {{ location.data.weather[0].main }}</h4>
                <h4>Temperatures today:</h4>
                <p>
                    Current {{ location.data.main.temp | number:'.0-0' }}
                    - Max {{ location.data.main.temp_max | number:'.0-0' }}
                    - Min {{ location.data.main.temp_min | number:'.0-0' }}
                </p>
                <p>
                    <a [routerLink]="['/forecast', location.zip]">Show 5-day forecast for {{ location.data.name }}</a>
                </p>
            </div>
            <div>
                <img [src]="location.data.weather[0].id | weatherIcon">
            </div>
        </div>
    `
})

export class CurrentConditionComponent {
    @Input() location: ConditionsAndZip;
}
