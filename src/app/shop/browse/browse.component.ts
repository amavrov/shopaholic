import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/entities/Cart.model';
import { Product } from 'src/entities/Product.model';
import { AuthService } from 'src/services/auth.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private ps: ProductService, public auth : AuthService) { }

  shopList$ : Observable<Product[]>;
  cart: Cart;

  addToCart(prd : Product, userId : string){
    var id = userId.toString();
    this.ps.addProductToCart(prd, id);
    alert(`Product ${prd.name} successfully added to your cart!`)
  }
  
  ngOnInit(): void {
    this.shopList$ = this.ps.loadShopList();
    this.cart = new Cart();
    this.cart.price = 0;
    this.cart.products = [];
  }

}
