import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { MessageHttp } from "./message.http";
import {
  loadMessageAction, loadMessageFailureAction, loadMessageSuccessAction
} from "./message.action";

@Injectable()
export class MessageEffect {
  loadMessages$ = createEffect(() => this.actions$.pipe(
      ofType(loadMessageAction),
      exhaustMap(({leadId}) => this.messageHttp.getAll(leadId)
        .pipe(
          map((messages) => loadMessageSuccessAction({messages})),
          catchError((error) => of(loadMessageFailureAction({error}))),
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private messageHttp: MessageHttp
  ) {
  }
}
