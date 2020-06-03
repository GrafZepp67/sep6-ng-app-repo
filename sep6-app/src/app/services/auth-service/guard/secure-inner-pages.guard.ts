import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth-service/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate 
{
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(authState => {
          if (authState) {
            this.router.navigate(['/dashboard']);
            return false;
          } else {
            //user is not loggedin
            return true;
          }
      })
    )
  }
}