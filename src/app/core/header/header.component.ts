import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userName: string;

  constructor(public auth: AuthService, public router: Router, public productService: ProductService)  { }

  logoutHandler(){
    this.auth.signOut();
    this.auth.getCurrentUser();
  }

  ngOnDestroy(): void {
  }
  
  ngOnInit(): void {
  }
  

}
