import { createAction, props } from '@ngrx/store';
import { Message } from "./message.model";

export enum MessageActionsType {
  load = '[Message] Load',
  loadSuccess = '[Message] Load Success',
  loadFailure = '[Message] Load Failure',
}

export const loadMessageAction = createAction(MessageActionsType.load);
export const loadMessageSuccessAction = createAction(MessageActionsType.loadSuccess, props<{ messages: Message[] }>());
export const loadMessageFailureAction = createAction(MessageActionsType.loadFailure, props<{ error: any }>());
