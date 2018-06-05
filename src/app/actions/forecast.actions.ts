import { Action } from '@ngrx/store';

export enum ForecastActionTypes {
    ForecastLoaded = '[Forecast] Forecast Loaded',
    ForecastLoadFailed = '[Forecast] Forecast Load Failded'
}

export class ForecastLoaded implements Action {
    readonly type = ForecastActionTypes.ForecastLoaded;

    constructor(public forecast: any){}
}

export class ForecastLoadFailed implements Action {
    readonly type = ForecastActionTypes.ForecastLoadFailed;

    constructor(public zipcode: string, public error: any){}
}

export type ForecastActions = ForecastLoaded | ForecastLoadFailed;
