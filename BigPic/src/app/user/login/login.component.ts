import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../state/user.reducer';
import { UserActionTypes, LoginUser } from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      email: 'email@email.com',
      password: 'password'
    };
    this.store.dispatch(new LoginUser(payload));
  }
}
