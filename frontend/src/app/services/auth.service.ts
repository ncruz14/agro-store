import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:4000/api/auth/register', {
        name,
        email,
        password,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
