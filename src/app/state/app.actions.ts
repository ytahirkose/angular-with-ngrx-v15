import {createAction, props} from '@ngrx/store';
import {MenuItem} from "../components/models/menuItem";

export const loadSetApps = createAction(
  '[App] Load Apps'
);

export const loadSetAppsSuccess = createAction(
  '[App] Load Set Apps Success',
  props<{ data: MenuItem }>()
);

export const loadSetAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);

export const loadGetApps = createAction(
  '[App] Load Apps'
);

export const loadGetAppsSuccess = createAction(
  '[App] Load Get Apps Success'
);

export const loadGetAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);
