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

export interface State {
  zipcodes: ZipCodeState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipCodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
