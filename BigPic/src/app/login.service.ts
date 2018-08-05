import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLogged: boolean = false;
  public loggedUser: Subject<User> = new Subject();
  constructor(private router: Router) {}

  isLogged() : Observable<boolean> {
    return of(this._isLogged);
  }

  login(user: User) {
    // if (user.name === 'Max') {
    this._isLogged = true;
    this.loggedUser.next(user);
    this.router.navigate(['/']);
    // }
  }
  logout() {
    this._isLogged = false;
    this.loggedUser.next(null);
  }
}
