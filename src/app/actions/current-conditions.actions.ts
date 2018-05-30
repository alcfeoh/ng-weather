import { Action } from '@ngrx/store';

export enum CurrentConditionsActionTypes {
    CurrentConditionsLoaded = '[CurrentConditions] CurrentConditions Loaded',
    CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditions Load Failded'
}

export class CurrentConditionsLoaded implements Action {
    readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded;

    constructor(public zipcode: string, public conditions: any){}
}

export class CurrentConditionsLoadFailed implements Action {
    readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;

    constructor(public zipcode: string, public error: any){}
}

export type CurrentConditionsActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed;
