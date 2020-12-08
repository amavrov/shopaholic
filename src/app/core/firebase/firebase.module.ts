import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from '../../../environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  declarations: [  ],
})
export class FirebaseModule { }
