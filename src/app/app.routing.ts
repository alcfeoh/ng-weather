/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastsListComponent,
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes,
  {},
);
