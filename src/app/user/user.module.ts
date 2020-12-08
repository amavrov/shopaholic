import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { FirebaseModule } from '../core/firebase/firebase.module';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: 
  [
  LoginComponent,
  RegisterComponent, 
  ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    FirebaseModule,
    NgxAuthFirebaseUIModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: []
})
export class UserModule { }
