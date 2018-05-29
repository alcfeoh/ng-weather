import { ZipcodeActions, ZipcodeActionTypes} from '../actions/zipcode.actions';


export interface State {
    zipcodes: Array<string>
}

export const initialState: State = {
    zipcodes: []
};

export function reducer(state = initialState, action: ZipcodeActions): State {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
        return {...state, zipcodes: [...state.zipcodes, action.zipcode]};
    case ZipcodeActionTypes.RemoveZipcode:
        return {...state, zipcodes: state.zipcodes.filter( item => item !== action.zipcode)};
    default:
      return state;
  }
}



