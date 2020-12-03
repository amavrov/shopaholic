import { Injectable } from '@angular/core';
import { User } from '../entities/user.model'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

    createUser(user: User): boolean {
        var isValid = false;

        this.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((u) => {
                isValid =  true;
                this.auth.signInWithEmailAndPassword(user.email, user.password);
                delete user.password;
                this.firestore.collection('Users').add(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                isValid = false;
            });
            return isValid;
    }

}
