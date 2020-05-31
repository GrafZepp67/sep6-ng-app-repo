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
  
  public user: any;

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

  getUser()
  {
    this.afAuth.authState.subscribe(user => {
      if(user)
      {
        this.user = user;
      }
    })

    return this.user;
  }
}
