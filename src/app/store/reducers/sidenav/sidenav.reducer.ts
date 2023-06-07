import { createReducer, on } from '@ngrx/store';
import {
  closeSidenavAction,
  openSidenavAction,
  toggleSidenavAction
} from '../../actions/sidenav/sidenav.action';

export interface SidenavState {
  opened: boolean;
}

const initialState: SidenavState = {
  opened: true,
};

export const sidenavReducer = createReducer(
  initialState,
  on(openSidenavAction, (state) => ({...state, opened: true})),
  on(closeSidenavAction, (state) => ({...state, opened: false})),
  on(toggleSidenavAction, (state) => ({...state, opened: !state.opened}))
);
