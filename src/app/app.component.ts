import {Component, OnInit} from '@angular/core';
import {MenuService} from "./services/menu.service";
import {select, Store} from "@ngrx/store";
import {selectGetApps} from "./state/app.selectors";
import {State} from "./state/app.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isMenuOpen: undefined | boolean;
  color: undefined | string;

  constructor(
    private menuService: MenuService,
    private store: Store<State>
  ) {
    this.menuService.getMenuObs().subscribe(menuStatus => {
      this.isMenuOpen = menuStatus;
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectGetApps)).subscribe(item => {
      this.color = item.color
    });
  }
}
