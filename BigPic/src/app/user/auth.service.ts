import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | null;
  redirectUrl: string;
  apiUrl: string = 'http://localhost:3000';
  userUrl: string = `${this.apiUrl}/user`;
  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(password: string, email: string): Observable<IUser> {
    // TODO: this.userStore.dispatch(new LoginAction());
    return this.http.post<IUser>(`${this.userUrl}/login`, {
      password,
      email
    });
  }

  logout(): void {
    // TODO: this.userStore.dispatch(new LogoutAction());
    this.currentUser = null;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

}
