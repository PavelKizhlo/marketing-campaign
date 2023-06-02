import { Action, ActionReducer } from '@ngrx/store';
import { SidenavActionsType } from '../../actions/sidenav/sidenav.action';

export interface SidenavState {
  opened: boolean;
}

const initialState: SidenavState = {
  opened: false,
};

export const sidenavReducer: ActionReducer<SidenavState, Action> = (
  state: SidenavState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SidenavActionsType.open:
      return {
        ...state,
        opened: true,
      };
    case SidenavActionsType.close:
      return {
        ...state,
        opened: false,
      };
    case SidenavActionsType.toggle:
      return {
        ...state,
        opened: !state.opened,
      };
    default:
      return state;
  }
};
