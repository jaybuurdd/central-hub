import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ALL_ROLES_ELIGIBLE } from './constants/roles.constants';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [RoleGuard],
    data: { roles: ALL_ROLES_ELIGIBLE }
   },
   {
    path:'action-items',
    loadChildren: () => import('./modules/pending-action-items.module').then(m => m.PendingActionItemsModule)
   },
   {
    path:'digital-assets',
    loadChildren: () => import('./modules/digital-assets.module').then(m => m.DigitalAssetsModule)
   },
   {
    path:'clients',
    loadChildren: () => import('./modules/clients.module').then(m => m.ClientsModule)
   },
   {
    path:'support',
    loadChildren: () => import('./modules/support.module').then(m => m.SupportModule)
   },
   {
    path:'security',
    loadChildren: () => import('./modules/security.module').then(m => m.SecurityModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
