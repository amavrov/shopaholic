import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [CreateProductComponent, BrowseComponent, CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
