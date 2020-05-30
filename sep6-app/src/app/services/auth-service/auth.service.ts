import { Injectable, NgZone } from '@angular/core';
import { User } from "../auth-service/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Log in with email/password
  Login(email: string, password: string) {
    try {
      const result = this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {        
        console.log("User logged in!")
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['/home']);
        console.log("Route changed!")
      });
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));    
    return (user !== null) ? true : false;
  }

  // Log out 
  Logout() {
    this.afAuth.signOut();
    console.log("User logged out!")
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
