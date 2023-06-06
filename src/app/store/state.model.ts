import {
  sidenavReducer,
  SidenavState,
} from './reducers/sidenav/sidenav.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface StateModel {
  sideNav: SidenavState;
}

export const reducers: ActionReducerMap<StateModel> = {
  sideNav: sidenavReducer,
};
