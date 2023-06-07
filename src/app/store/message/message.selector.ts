import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as selectors from "./message.reducer";
import { MessageState } from "./message.reducer";

export const getMessageSelector = createFeatureSelector<MessageState>(
  'message',
);

export const getAllMessages = createSelector(
  getMessageSelector,
  selectors.selectAllMessages
);
