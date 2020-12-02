import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
