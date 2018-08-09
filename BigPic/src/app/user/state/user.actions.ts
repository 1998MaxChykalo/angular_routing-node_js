import { Action } from "@ngrx/store";
import { IUser } from "../user";

export enum UserActionTypes {
  LoginUser = '[User] Login User',
  LoginUserSuccess = '[User] Login User Success',
  LoginUserError = '[User] Login User Error',
}

export class LoginUser implements Action {
  readonly type: UserActionTypes.LoginUser;
  constructor(public payload: IUser){}
}

export class LoginUserSuccess implements Action {
  readonly type: UserActionTypes.LoginUserSuccess;
  constructor(public payload: IUser){}
}

export class LoginUserError implements Action {
  readonly type: UserActionTypes.LoginUserError;
  constructor(public payload: string){}
}

export type UserActions = LoginUser
  | LoginUserSuccess
  | LoginUserError;