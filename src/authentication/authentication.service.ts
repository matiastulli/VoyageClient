import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string;

  constructor(private http: HttpClient, @Inject('APP_CONFIG') private appConfig: any) {
    // Initialize the baseUrl from the configuration
    this.baseUrl = appConfig.apiUrl;
  }

  login(mail: string, password: string): Observable<any> {
    // Implement HTTP POST request to your backend for login.
    const body = { mail, password };
    return this.http.post(`${this.baseUrl}/user/login`, body);
  }

  logout(): void {
    // Implement HTTP POST request to your backend for logout if needed.
  }
}
