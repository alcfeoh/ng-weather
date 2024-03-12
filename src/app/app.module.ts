import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import {LocationService} from "./location.service";
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import {WeatherService} from "./weather.service";
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {WeatherIconPipePipe} from './pipes/weather-icon.pipe';
import {WeatherCachingService} from './weather-caching.service';
import {TabComponent} from './shared/ui/tab.component';
import {TabsComponent} from './shared/ui/tabs.component';
import {CurrentConditionComponent} from './shared/ui/current-condition.component';

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
    WeatherIconPipePipe,
    TabComponent,
    TabsComponent,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CurrentConditionComponent
  ],
  providers: [LocationService, WeatherService, WeatherCachingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
