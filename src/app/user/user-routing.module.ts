import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register user'
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'User login'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'User profile'
        },
        canActivate : [AuthGuard]
      }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
