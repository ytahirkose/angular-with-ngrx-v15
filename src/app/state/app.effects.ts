import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {Observable, EMPTY, of} from 'rxjs';
import * as AppActions from './app.actions';
import {loadSetAppsSuccess} from "./app.actions";


@Injectable()
export class AppEffects {

  loadApps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadSetApps),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AppActions.loadSetAppsSuccess({data})),
          catchError(error => of(AppActions.loadSetAppsFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions) {
  }
}
