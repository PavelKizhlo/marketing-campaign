import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LeadHttp } from "./lead.http";
import {
  continueFlowAction, continueFlowSuccessAction,
  LeadRequestType,
  loadCountNewMessagesAction,
  loadCountNewMessagesSuccessAction,
  loadLeadAction,
  loadLeadFailureAction,
  loadLeadSuccessAction, loadOneLeadAction, loadOneLeadSuccessAction
} from "./lead.action";

@Injectable()
export class LeadEffect {
  loadLeads$ = createEffect(() => this.actions$.pipe(
      ofType(loadLeadAction),
      exhaustMap(({requestType}) => (
        requestType === LeadRequestType.conversation
        ? this.leadHttp.getAllConversations()
        : this.leadHttp.getAllConversations()
      )
        .pipe(
          map((leads) => loadLeadSuccessAction({leads})),
          catchError((error) => of(loadLeadFailureAction({error}))),
        ))
    )
  );

  loadCountNewMessages$ = createEffect(() => this.actions$.pipe(
      ofType(loadCountNewMessagesAction),
      exhaustMap(() => this.leadHttp.getCountNewMessages()
        .pipe(
          map((data) => loadCountNewMessagesSuccessAction(data)),
        ))
    )
  );

  loadLead$ = createEffect(() => this.actions$.pipe(
      ofType(loadOneLeadAction),
      exhaustMap(({id}) => this.leadHttp.getOneLead(id)
        .pipe(
          map((lead) => loadOneLeadSuccessAction({lead})),
        ))
    )
  );

  continueFlow$ = createEffect(() => this.actions$.pipe(
      ofType(continueFlowAction),
      exhaustMap(({id, status, leadId}) => this.leadHttp.continueFlow(id, status, leadId)
        .pipe(
          map(() => loadOneLeadAction({id: leadId})),
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private leadHttp: LeadHttp
  ) {
  }
}
