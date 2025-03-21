import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private http: HttpClient, private store: Store) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadData),
      mergeMap(() =>
        this.http.get('assets/data.json').pipe(
          map((data) => DashboardActions.loadDataSuccess({ data })),
          catchError((error) => of(DashboardActions.loadDataFailure({ error: error.message })))
        )
      )
    )
  );
}
