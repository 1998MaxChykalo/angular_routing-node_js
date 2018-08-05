import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ],
})
export class AppComponent implements OnInit {
  title = 'app';
  isLogged: boolean;
  loggedUser: User;
  constructor(public loginService: LoginService) {}

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
    this.loginService.isLogged().subscribe( isLogged => {
      this.isLogged = isLogged;
      console.log(isLogged);
    });
    this.loginService.loggedUser.subscribe(loggedUser => this.loggedUser = loggedUser);
  }
  logout() {
    this.loginService.logout();
  }
}
