import { createAction, props } from '@ngrx/store';
import { Lead } from "./lead.model";

export enum LeadActionsType {
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

export const loadCountNewMessagesAction = createAction(LeadActionsType.loadCountNewMessages);
export const loadCountNewMessagesSuccessAction = createAction(LeadActionsType.loadCountNewMessagesSuccess, props<{ count: number }>());
export const loadLeadAction = createAction(LeadActionsType.load, props<{ requestType: LeadRequestType }>());
export const loadLeadSuccessAction = createAction(LeadActionsType.loadSuccess, props<{ leads: Lead[] }>());
export const loadLeadFailureAction = createAction(LeadActionsType.loadFailure, props<{ error: any }>());
