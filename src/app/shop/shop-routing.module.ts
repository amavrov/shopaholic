import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';

import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';
import { CreateProductComponent} from './create-product/create-product.component';


const routes: Routes = [
  {
    path: 'create-product',
    component: CreateProductComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'browse',
    component : BrowseComponent
  },
  {
    path: 'cart',
    component : CartComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }