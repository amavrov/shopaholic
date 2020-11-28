import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [

  {
    path: 'shop',
    component: ShopComponent,
    data: {
      title: 'shop'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404'
    }
  }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
