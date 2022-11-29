import {Component} from '@angular/core';
import {MenuItem} from "../models/menuItem";
import {State} from 'src/app/state/app.reducer';
import {Store} from '@ngrx/store'
import {loadSetAppsSuccess} from "../../state/app.actions";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent {
  menuItems: MenuItem[] = [
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
  ]
  selected: MenuItem | undefined;

  constructor(private store: Store<State>) {
  }

  setMenuStatus(menuItem: any) {
    this.store.dispatch(loadSetAppsSuccess(menuItem));
  }
}
