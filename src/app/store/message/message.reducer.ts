import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Message } from "./message.model";
import { createReducer, on } from "@ngrx/store";
import {
  loadMessageAction,
  loadMessageFailureAction,
  loadMessageSuccessAction
} from "./message.action";

export interface MessageState extends EntityState<Message> {
  loading: boolean
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: MessageState = adapter.getInitialState({
  loading: true,
});

export const messageReducer = createReducer(
  initialState,
  on(loadMessageAction, (state) => ({...state, loading: true})),
  on(loadMessageSuccessAction, (state, {messages}) => {
    return adapter.addMany(messages, {...state, selectedId: null, loading: false});
  }),
  on(loadMessageFailureAction, (state) => ({...state, loading: false})),
);

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectMessageIds = selectIds;

// select the dictionary of user entities
export const selectMessageEntities = selectEntities;

// select the array of users
export const selectAllMessages = selectAll;

// select the total user count
export const selectMessageTotal = selectTotal;
