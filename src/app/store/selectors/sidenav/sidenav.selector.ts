import { StateModel } from '../../state.model';
import { createSelector } from '@ngrx/store';
import { SidenavState } from '../../reducers/sidenav/sidenav.reducer';

export const selectSidenav = (state: StateModel) => state.sideNav;

export const selectSidenavOpened = createSelector(
  selectSidenav,
  (state: SidenavState) => state.opened,
);
