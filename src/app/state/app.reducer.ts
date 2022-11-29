import {createReducer, on} from '@ngrx/store';
import * as AppActions from './app.actions';
import {MenuItem} from "../components/models/menuItem";

export const appFeatureKey = 'app';

export interface State {
  menuItems: MenuItem[];
  selectedMenuItem: MenuItem;
}

export const initialState: State = {
  menuItems: [
    {value: '#abc', color: '#abc'},
    {value: '#fbd', color: '#fbc'},
    {value: '#345', color: '#345'},
    {value: '#678', color: '#678'},
    {value: '#128', color: '#128'},
    {value: '#981', color: '#981'},
    {value: '#09a', color: '#09a'},
    {value: '#fe3', color: '#fe3'},
    {value: '#3fe', color: '#3fe'},
    {value: '#ca4', color: '#ca4'},
    {value: '#1e3', color: '#1e3'}
  ],
  selectedMenuItem: {value: '#cba', color: '#cba'}
};

export const reducer = createReducer(
  initialState,

  on(AppActions.loadSetAppsSuccess, (state, action) => {
    // @ts-ignore
    let item = {value: action.value, color: action.color}
    return {
      ...state,
      selectedMenuItem: item
    }
  }),
  on(AppActions.loadGetAppsSuccess, (state, action) => {
    return state
  }),
);
