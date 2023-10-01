import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@authentication/modules';
//TODO
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private AuthenticationService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.AuthenticationService.isAuthenticated(); // Replace with your authentication logic
  }
}
