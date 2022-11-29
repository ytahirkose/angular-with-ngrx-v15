import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class MenuService {

  isMenuOpen$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getMenuObs(): Observable<boolean> {
    return this.isMenuOpen$.asObservable();
  }

  setMenuObs(menuStatus: boolean): void {
    this.isMenuOpen$.next(menuStatus);
  }
}
