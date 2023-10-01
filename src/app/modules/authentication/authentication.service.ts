// Angular Imports
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '@environment'

// Thirdparty Imports
import { Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

	constructor(private _http: HttpClient) {}

  signin(mail: string, password: string): Observable<any> {
    const url = `${environment.apiUrl}/user/signin`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { mail, password };

    return this._http.post(url, body, { headers }).pipe(
      map((response: any) => {
        // Handle the response from the server here
        // You can return the response data or perform other actions
        return response;
      })
    );
  }
}





