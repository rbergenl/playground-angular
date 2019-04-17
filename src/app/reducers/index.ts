import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';


export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<fromUser.State>('user');
export const getUserPersona = createSelector(selectUserState, fromUser.getUserPersona);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
