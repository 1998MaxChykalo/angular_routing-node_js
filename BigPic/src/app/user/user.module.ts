import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffects])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class UserModule { }
