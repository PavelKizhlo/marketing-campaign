import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Lead } from "./lead.model";
import { createReducer, createSelector, on } from "@ngrx/store";
import {
  loadCountNewMessagesSuccessAction,
  loadLeadAction,
  loadLeadFailureAction,
  loadLeadSuccessAction, loadOneLeadSuccessAction, selectLeadAction
} from "./lead.action";

export interface LeadState extends EntityState<Lead> {
  selectedId: number | null;
  countNewMessages: number;
  loading: boolean
}

export const adapter: EntityAdapter<Lead> = createEntityAdapter<Lead>();

export const initialState: LeadState = adapter.getInitialState({
  selectedId: null,
  countNewMessages: 0,
  loading: true,
});

export const leadReducer = createReducer(
  initialState,
  on(selectLeadAction, (state, {id}) => ({...state, selectedId: id})),
  on(loadLeadAction, (state) => ({...state, loading: true})),
  on(loadOneLeadSuccessAction, (state, {lead}) => {
    return adapter.updateOne({id: lead.id, changes: lead}, {...state, loading: false});
  }),
  on(loadLeadSuccessAction, (state, {leads}) => {
    return adapter.addMany(leads, {...state, loading: false});
  }),
  on(loadLeadFailureAction, (state) => ({...state, loading: false})),
  on(loadCountNewMessagesSuccessAction, (state, {count}) => ({...state})),
);


export const selectedId = (state: LeadState) => state.selectedId;
export const countNewMessages = (state: LeadState) => state.countNewMessages;
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectLeadIds = selectIds;

// select the dictionary of user entities
export const selectLeadEntities = selectEntities;

// select the array of users
export const selectAllLeads = selectAll;

// select the total user count
export const selectLeadTotal = selectTotal;
