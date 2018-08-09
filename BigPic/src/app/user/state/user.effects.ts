import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { UserActionTypes, UserActions, LoginUser, LoginUserSuccess, LoginUserError } from './user.actions';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ){}

  @Effect()
  logIn$: Observable<any> = this.actions$
    .ofType(UserActionTypes.LoginUser)
    .pipe(
      map((action: LoginUser) => action.payload),
      switchMap((user) => {
        return this.authService.login(user.password, user.email)
          .pipe(
            map(user => new LoginUserSuccess(user)),
            catchError(error => of(new LoginUserError(error)))
          );
      })
  )
}