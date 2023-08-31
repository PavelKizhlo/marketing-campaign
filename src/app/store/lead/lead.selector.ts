import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as selectors from "./lead.reducer";
import { LeadState, selectLeadEntities } from "./lead.reducer";

export const getLeadSelector = createFeatureSelector<LeadState>(
  'lead',
);

export const getAllLeads = createSelector(
  getLeadSelector,
  selectors.selectAllLeads
);

export const getAllEntities = createSelector(
  getLeadSelector,
  selectors.selectLeadEntities
);

export const getSelectedId = createSelector(
  getLeadSelector,
  selectors.selectedId
);

export const getCountNewMessages = createSelector(
  getLeadSelector,
  selectors.countNewMessages
);

export const getSelectLead = createSelector(
  getAllEntities,
  getSelectedId,
  (entities, id) => {
    console.log(id, entities);
    console.log(id ? entities[id] : null);
    return id ? entities[id] : null;
  }
);
