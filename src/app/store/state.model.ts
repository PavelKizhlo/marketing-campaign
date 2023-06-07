import { sidenavReducer, SidenavState, } from './reducers/sidenav/sidenav.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { leadReducer, LeadState } from "./lead/lead.reducer";
import { messageReducer, MessageState } from "./message/message.reducer";

export interface StateModel {
  lead: LeadState;
  sideNav: SidenavState;
  message: MessageState;
}

export const reducers: ActionReducerMap<StateModel> = {
  lead: leadReducer,
  sideNav: sidenavReducer,
  message: messageReducer,
};
