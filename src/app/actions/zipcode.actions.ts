import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  AddZipcode = '[Zipcode] Add Zipcode',
  RemoveZipcode = '[Zipcode] Remove Zipcode'
}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;

  constructor(public zipcode: string){}
}

export class RemoveZipcode implements Action {
    readonly type = ZipcodeActionTypes.RemoveZipcode;

    constructor(public zipcode: string){}
}

export type ZipcodeActions = AddZipcode | RemoveZipcode;
