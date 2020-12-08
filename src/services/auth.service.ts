import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../entities/user.model'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  
  constructor( 
    private afs: AngularFirestore, 
    private router : Router, 
    private afAuth: AngularFireAuth) { 
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if(user){
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          else{
            return of(null);
          }
        })
      );
  }

  async googleSignIn(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({uid, email, displayName, photoURL}: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    }
    return userRef.set(data, {merge : true})
  }

  createUser(email, password): boolean {
    var isValid = false;

    this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((u) => {
            isValid =  true;
            const credential = this.afAuth.signInWithEmailAndPassword(email, password);
            this.afs.collection('Users').add(credential);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            isValid = false;
        });
        return isValid;
}
}