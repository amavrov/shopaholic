import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';
import { CreateProductComponent} from './create-product/create-product.component';


const routes: Routes = [
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'browse',
    component : BrowseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }