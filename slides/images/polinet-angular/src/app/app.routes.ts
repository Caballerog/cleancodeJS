import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthGuard } from './services/auth/auth.guard';
import { AdminDatatableComponent } from 'app/components/common/layouts/administratorDatatable/admin-datatable.component';
import { SignupComponent } from 'app/views/sessions/signup/signup.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    //canActivate: [AuthGuard],
    children: [

      {
        path: 'dashboard',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Others', breadcrumb: 'Gestión del tráfico y acceso a la comunidad educativa' }
      }

    ]
  },
  {
    path: 'administrator',
    component: AdminDatatableComponent,
    //canActivate: [AuthGuard],
    children: [

      {
        path: 'administrator',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Others', breadcrumb: 'Gestión del tráfico y acceso a la comunidad educativa' }
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

