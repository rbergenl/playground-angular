import {Action, createSelector} from '@ngrx/store';
import { UserActionTypes, ActionsUnion} from '../actions/user.actions';
import {User} from '../user';

export interface State {
  user: User;
}


export const initialState: State = {
  user: {
    persona: '',
    sector: '',
    turnover: ''
  }
};

export const getUserPersona = (state: State) => state.user.persona;

export function reducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return state;

    case UserActionTypes.SetPersona:
      console.log(action);
      const newState = {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
      console.log(newState)
      return newState;

    default:
      return state;
  }
}
