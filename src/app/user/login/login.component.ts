import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../entities/user.model';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs: 'ngForm' 
})
export class LoginComponent implements OnInit {

  logInForm : {email : string, password: string, name: string};
  errorMessage : string = '';

  constructor(
    public auth: AuthService,
    public _router: Router,
    ) { }

  ngOnInit(): void {
  }

  logInUser(loginForm: NgForm) {
    this.logInForm = loginForm.form.value;
    this.save();
  }

  save() {
    var hasLogged = this.auth.logInWithEmailAndPassword(this.logInForm.email, this.logInForm.password)
    .then( () => 
      this._router.navigate(["/home"])
      )
    .catch( () => 
      this.errorMessage = 'Invalid email or password!'
    );
  }

}
