import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component'
import { LocationService } from './services/location.service'
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component'
import { WeatherService } from './services/weather.service'
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component'
import { MainPageComponent } from './main-page/main-page.component'
import { RouterModule } from '@angular/router'
import { routing } from './app.routing'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { TabSetComponent } from './tab-set/tab-set.component'
import { TabComponent } from './tab-set/tab/tab.component'
import { StorageService } from './services/storage.service'

@NgModule({
    declarations: [
        AppComponent,
        ZipcodeEntryComponent,
        ForecastsListComponent,
        CurrentConditionsComponent,
        MainPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        routing,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        TabSetComponent,
        TabComponent,
    ],
    providers: [LocationService, WeatherService, StorageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
