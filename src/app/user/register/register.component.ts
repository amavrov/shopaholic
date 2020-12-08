import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../entities/user.model';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  exportAs: 'ngForm' 
})
export class RegisterComponent implements OnInit {

  newUserForm : {email : string, password: string, name: string};

  constructor(
    private auth: AuthService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  RegisterUser(regForm: NgForm) {
    this.newUserForm = regForm.form.value;
    this.save();
  }

  save() {
    var hasLogged = this.auth.createUser(this.newUserForm.email, this.newUserForm.password);
    if(hasLogged){
      this._router.navigate(["/"])
    }
  }
}
