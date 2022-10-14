import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { LocationService } from './location.service';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from './shared/shared.module';
import { WeatherService } from './weather.service';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
