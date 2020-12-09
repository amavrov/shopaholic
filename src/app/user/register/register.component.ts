import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../entities/user.model';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  exportAs: 'ngForm'
})
export class RegisterComponent implements OnInit {

  newUserForm: { email: string, password: string, displayName: string };
  errorMessage: string = '';
  hasError: boolean = false;

  constructor(
    public auth: AuthService,
    public _router: Router,
  ) { }

  ngOnInit(): void {
  }

  RegisterUser(regForm: NgForm) {
    this.newUserForm = regForm.form.value;
    this.save();
  }

  save() {
    var hasLogged = this.auth.createUserWithEmailAndPassword(this.newUserForm.email, this.newUserForm.password, this.newUserForm.displayName)
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
          this._router.navigate(['/home'])
        }
      })
  }
}
