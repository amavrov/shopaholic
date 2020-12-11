import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/entities/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth : AuthService, public _router : Router) { }

  isInEdit : boolean = false;

  editUserForm: { uid: string, email: string, displayName: string, photoURL: string };
  errorMessage: string = '';
  hasError: boolean = false;

  toggleEditMode(){
    this.isInEdit = !this.isInEdit;
  }

  editProfile(editUserForm : NgForm, user : User){
    this.toggleEditMode();
    this.editUserForm = editUserForm.form.value;
    this.save(user);
  }

  save(u : User) {
    var user = new User();
    user.uid = u.uid;
    user.email = u.email;
    user.displayName = this.editUserForm.displayName;
    user. photoURL = this.editUserForm.photoURL;

    this.auth.updateUserData(user)
      .catch(() => {
        this.errorMessage = 'Email already in use!'
        this.hasError = true
      }
      )
      .finally(() => {
        if(this.hasError){
        this.errorMessage = 'Email already in use!'
        }
        else{
          this.isInEdit == false;
        }
      })
  }

  ngOnInit(): void {
  }

}
