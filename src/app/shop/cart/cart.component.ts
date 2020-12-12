import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cart } from 'src/entities/Cart.model';
import { Product } from 'src/entities/Product.model';
import { AuthService } from 'src/services/auth.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ps: ProductService, public auth: AuthService, public router : Router) { 
    this.isShown = false;
    this.isBtnHidden = false;
  }
  
  shopList$ : Observable<Cart[]>;
  userId : string;
  list : Observable<Product>;
  isShown : boolean;
  isBtnHidden : boolean;

  
  loadCart(userId : string){
    this.isShown = true;
    this.isBtnHidden = true;
    this.userId = userId.toString();
    this.list = this.ps.getUserCart(this.userId);
    console.log(this.userId);
  }

  buyCart(){
    this.ps.purchaseProductsFromCart(this.userId);
    this.router.navigate(['/home'])
    alert("You have purchased your desired product!")
  }

  ngOnInit(): void {
  }

}
