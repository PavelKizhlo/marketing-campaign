import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LeadHttp } from "./lead.http";
import {
  LeadRequestType,
  loadCountNewMessagesAction, loadCountNewMessagesSuccessAction,
  loadLeadAction,
  loadLeadFailureAction,
  loadLeadSuccessAction
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

  constructor(
    private actions$: Actions,
    private leadHttp: LeadHttp
  ) {
  }
}
