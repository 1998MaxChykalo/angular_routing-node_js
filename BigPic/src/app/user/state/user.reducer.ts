import { IUser } from "../user";
import * as fromRoot from './../../state/app.state';
import { UserActionTypes } from "./user.actions";
export interface UserState {
  currentUser: IUser
}

export const initialState: UserState = {
  currentUser: null,
}

export interface State extends fromRoot.State {
  users: UserState
}

export function reducer(state = initialState, action): UserState {
  switch (action.type) {
    case UserActionTypes.LoginUser: {
      console.log('user logged in')
    }
    default:
      return state;
  };
}