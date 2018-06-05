import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer as zipCodeReducer} from './zip-codes.reducer';
import {State as ZipCodeState} from './zip-codes.reducer';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {forecastReducer, ForecastState} from './forecast.reducer';

export interface State {
  zipcodes: ZipCodeState,
  currentConditions: CurrentConditionsState,
  router: RouterReducerState,
  forecast: ForecastState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipCodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer,
  forecast: forecastReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: State) => state.zipcodes;

export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipCodeState) => state.zipcodes);

export const selectCurrentConditionsState = (state: State) => state.currentConditions;

export const selectCurrentConditionsMap = createSelector(selectCurrentConditionsState,
    (state: CurrentConditionsState) => state.currentConditions);

export const selectForecastState = (state: State) => state.forecast;

export const selectForecast = createSelector(selectForecastState,
    (state: ForecastState) => state.forecast);

