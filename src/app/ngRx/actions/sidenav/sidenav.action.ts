import { createAction } from '@ngrx/store';

export enum SidenavActionsType {
  open = '[SIDENAV] open',
  close = '[SIDENAV] close',
  toggle = '[SIDENAV] toggle',
}

export const openSidenavAction = createAction(SidenavActionsType.open);

export const closeSidenavAction = createAction(SidenavActionsType.close);

export const toggleSidenavAction = createAction(SidenavActionsType.toggle);
