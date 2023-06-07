import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as selectors from "./lead.reducer";
import { LeadState } from "./lead.reducer";

export const getLeadSelector = createFeatureSelector<LeadState>(
  'lead',
);

export const getAllLeads = createSelector(
  getLeadSelector,
  selectors.selectAllLeads
);

export const getCountNewMessages = createSelector(
  getLeadSelector,
  selectors.getCountNewMessages
);
