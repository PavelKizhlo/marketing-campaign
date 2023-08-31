import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  continueFlowAction,
  LeadRequestType,
  loadCountNewMessagesAction,
  loadLeadAction,
  loadOneLeadAction,
  selectLeadAction
} from "./lead.action";
import { StateModel } from "../state.model";
import { getAllLeads, getCountNewMessages, getSelectLead } from "./lead.selector";

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

  selectLead(id: number | null) {
    this.store.dispatch(selectLeadAction({id}));
  }

  loadLead(id: number) {
    this.store.dispatch(loadOneLeadAction({id}));
  }

  continueFlow(id: number, status: boolean, leadId: number) {
    this.store.dispatch(continueFlowAction({id, status, leadId}));

  }

  leads$() {
    return this.store.pipe(select(getAllLeads));
  }

  lead$() {
    return this.store.pipe(select(getSelectLead));
  }

  countNewMessages$() {
    return this.store.pipe(select(getCountNewMessages));
  }
}
