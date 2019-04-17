import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  SetPersona = '[User] Set Persona'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class SetPersona implements Action {
  readonly type = UserActionTypes.SetPersona;
  constructor(public payload: { persona: string; }) {}
}

export type ActionsUnion = LoadUsers | SetPersona;
