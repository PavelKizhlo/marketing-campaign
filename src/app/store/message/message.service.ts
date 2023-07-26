import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadMessageAction } from "./message.action";
import { StateModel } from "../state.model";
import { getAllMessages } from "./message.selector";
import { combineLatest, Observable } from "rxjs";
import { LeadService } from "../lead/lead.service";
import { map } from "rxjs/operators";
import { Message } from "./message.model";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(
    private store: Store<StateModel>,
    private leadService: LeadService
  ) {
  }

  load(leadId: number) {
    this.store.dispatch(loadMessageAction({leadId}));
  }

  messagesWithLead$(): Observable<Message[]> {
    const leads$ = this.leadService.leads$();
    const messages$ = this.messages$();
    return combineLatest([messages$, leads$]).pipe(
      map(([messages, leads]) =>
        messages.map((n) => ({...n, lead: leads.find((l) => l.id === n.leadId)})),
      ),
    );
  }

  messages$() {
    return this.store.pipe(select(getAllMessages));
  }
}
