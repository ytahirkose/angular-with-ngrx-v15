import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectSetApps = createSelector(
  selectAppState,
  (state: fromApp.State) => state.selectedMenuItem
);

export const selectGetApps = createSelector(
  selectAppState,
  (state: fromApp.State) => state.selectedMenuItem
);
