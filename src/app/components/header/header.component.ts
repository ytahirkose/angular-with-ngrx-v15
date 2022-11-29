import {Component} from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen: undefined | boolean;

  constructor(private menuService: MenuService) {
    this.menuService.getMenuObs().subscribe(menuStatus => {
      this.isMenuOpen = menuStatus;
    });
  }

  setMenuStatus() {
    this.menuService.setMenuObs(!this.isMenuOpen);
  }
}
