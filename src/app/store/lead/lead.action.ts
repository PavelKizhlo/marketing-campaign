import { createAction, props } from '@ngrx/store';
import { Lead } from "./lead.model";

export enum LeadActionsType {
  continueFlow = '[Lead] Continue Flow',
  continueFlowSuccess = '[Lead] Continue Flow Success',
  loadOneLead = '[Lead] Load One Lead',
  loadOneLeadSuccess = '[Lead] Load One Lead Success',
  loadOneLeadFailure = '[Lead] Load One Lead Failure',
  selectLead = '[Lead] Select Lead',
  loadCountNewMessages = '[Lead] Load Count New Messages',
  loadCountNewMessagesSuccess = '[Lead] Load Count New Messages Success',
  load = '[Lead] Load',
  loadSuccess = '[Lead] Load Success',
  loadFailure = '[Lead] Load Failure',
}

export enum LeadRequestType {
  conversation = 'conversation',
  all = 'all',
}

export const continueFlowAction = createAction(LeadActionsType.continueFlow, props<{ id: number, status: boolean, leadId: number }>());
export const continueFlowSuccessAction = createAction(LeadActionsType.continueFlow);
export const loadOneLeadAction = createAction(LeadActionsType.loadOneLead, props<{ id: number }>());
export const loadOneLeadSuccessAction = createAction(LeadActionsType.loadOneLeadSuccess, props<{ lead: Lead }>());
export const selectLeadAction = createAction(LeadActionsType.selectLead, props<{ id: number | null }>());
export const loadCountNewMessagesAction = createAction(LeadActionsType.loadCountNewMessages);
export const loadCountNewMessagesSuccessAction = createAction(LeadActionsType.loadCountNewMessagesSuccess, props<{ count: number }>());
export const loadLeadAction = createAction(LeadActionsType.load, props<{ requestType: LeadRequestType }>());
export const loadLeadSuccessAction = createAction(LeadActionsType.loadSuccess, props<{ leads: Lead[] }>());
export const loadLeadFailureAction = createAction(LeadActionsType.loadFailure, props<{ error: any }>());
