import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth-service/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(authState => {
          if (authState) {
            //user is already loggedin
            //route the user to Dashboard page
            //Or a page where you want the app to naviagte
            this.router.navigate(['/home']);
            //dont show the Login page
            return false;
          } else {
            //user is not loggedin
            return true;
          }
      })
    )
  }

  //Working for authGuard
  /*canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
         take(1),
         map(user => !!user), // <-- map to boolean
         tap(loggedIn => {
           if (loggedIn) {
             console.log('Already logged in!')
             this.router.navigate(['/home']);
           }
       })
    )
  }*/

  /*canActivate() {
    return this.auth.user$.pipe(
                    take(1)
                    .map(authState => {
                       if (authState) {
                          //user is already loggedin
                          //route the user to Dashboard page
                          //Or a page where you want the app to naviagte
                          this.router.navigate("dashboard route");
                          //dont show the Login page
                          return false;
                       } else {
                         //user is not loggedin
                         return true;
                       }
                    })
    )
  }*/
}
