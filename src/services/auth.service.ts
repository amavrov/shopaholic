import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../entities/user.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    );
  }

  isAdmin(email) : boolean {
    var admins = environment.admins.mails;
    if(admins.includes(email)){
      return true;
    }
    else {
      return false;
    }
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['/home']);
    return await this.updateUserData(credential.user);
  }


  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/home']);
  }

  async createUserWithEmailAndPassword(email, password, displayName) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (u) => {
        const credential = await this.afAuth.signInWithEmailAndPassword(email, password)
        return await this.updateUserData(credential.user, displayName);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        throw errorMessage;
      });
  }

  async logInWithEmailAndPassword(email, password){
    const credential = await this.afAuth.signInWithEmailAndPassword(email, password);
    return this.updateUserData(credential.user);
  }

  public updateUserData({ uid, email, displayName, photoURL }: User, dn?) : any {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`);
    if(!dn || 0 === dn.length){
      const data = {
        uid,
        email,
        displayName,
        photoURL
      }
      return userRef.set(data, { merge: true })
    }
    else{
      const data = {
        uid,
        email,
        displayName : dn,
        photoURL
      }
      return userRef.set(data, { merge: true })
    }


    
  }
}