import { Injectable, NgZone } from '@angular/core';
import { User } from "../auth-service/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import firebase from '@firebase/app';
import '@firebase/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  userData: any; // Save logged in user data
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async login(email: string, password: string){
    const provider = new firebase.auth.EmailAuthProvider();
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['/home']);
    return this.updateUserData(credential.user)
  }

  async logout() {
    await this.afAuth.signOut();
    console.log("Logged out!");
    this.router.navigate(['/login']);
  }

  private updateUserData(user : any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email
    } 

    return userRef.set(data, { merge: true })
  }

  /*async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {        
        console.log("User logged in!");
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['/home']);
        console.log(this.router.url);
      });
    }
    catch (error) {
      window.alert(error.message);
    }
  }*/

  

  /*
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
  }*/
}
