import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../entities/user.model';
import { UserService } from '../../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  exportAs: 'ngForm' 
})
export class RegisterComponent implements OnInit {

  newUserForm : User;

  constructor(
    private us: UserService,
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
    var hasLogged = this.us.createUser(this.newUserForm);
    if(hasLogged){
      this._router.navigate(["../../home"],{relativeTo:this._activatedRoute})
    }
  }
}
