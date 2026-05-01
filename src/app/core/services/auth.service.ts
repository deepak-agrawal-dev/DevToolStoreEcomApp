import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);

  user = signal<any>(null);

  constructor() {
    const saved =
      localStorage.getItem('user');

    if (saved) {
      this.user.set(JSON.parse(saved));
    }
  }

  /**
   * Mock login from users API.
   */
  login(email: string, password: string) {
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    return this.http.get<any[]>(`https://devtoolstoreecomappbackend.onrender.com/users?email=${cleanEmail}&password=${cleanPassword}`)
      .pipe(
        tap(users => {
          if (users.length) {
            localStorage.setItem('user', JSON.stringify(users[0]))
          }
        })
      );
  }

  /**
   * Current user.
   */
  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

   setUser(user: any): void {
    this.user.set(user);
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.user.set(null);
    this.router.navigate(['/home']);
  }
  
  isLoggedIn():boolean {
    return !!this.getUser();
  }

  isAdmin():boolean {
    return this.getUser()?.role === 'admin';
  }
}
