import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '../shared/validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title: string;
  constructor(private loginService: LoginService, private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [ Validators.email]),
      password: new FormControl('', [ PasswordValidator.validatePasswordLength ]),
    });
  }

  login(ev: Event) {
    ev.preventDefault();
    const user = new User(
      this.loginForm.controls.name.value,
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value);
    this.loginService.login(user);
    this.loginService.isLogged().subscribe((val) => setInterval(console.log(val), 1000));
    this.loginForm.reset();

  }
}
