import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LeadRequestType, loadCountNewMessagesAction, loadLeadAction } from "./lead.action";
import { StateModel } from "../state.model";
import { getAllLeads, getCountNewMessages } from "./lead.selector";

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private store: Store<StateModel>) {
  }

  loadConversations() {
    this.store.dispatch(loadLeadAction({requestType: LeadRequestType.conversation}));
  }

  loadCountNewMessages() {
    this.store.dispatch(loadCountNewMessagesAction());
  }

  leads$() {
    return this.store.pipe(select(getAllLeads));
  }

  countNewMessages$() {
    return this.store.pipe(select(getCountNewMessages));
  }
}
