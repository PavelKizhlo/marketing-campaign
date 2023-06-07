import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadMessageAction } from "./message.action";
import { StateModel } from "../state.model";
import { getAllMessages } from "./message.selector";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private store: Store<StateModel>) {
  }

  loadConversations() {
    this.store.dispatch(loadMessageAction());
  }

  messages$() {
    return this.store.pipe(select(getAllMessages));
  }
}
