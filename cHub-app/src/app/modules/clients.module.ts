/** Companies, PO, Users */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { USER_MANAGEMENT_ELIGIBLE, ALL_ROLES_ELIGIBLE } from '../constants/roles.constants';
import { PendingFrameworkListComponent } from '../pages/action-items/pending-framework-list/pending-framework-list.component';

const clientRoutes: Routes = [
    {
      path: 'user-management',
      component: PendingFrameworkListComponent,
      canActivate: [RoleGuard],
      data: { roles: USER_MANAGEMENT_ELIGIBLE }
    },
    {
      path: 'companies',
      component: PendingFrameworkListComponent,
      canActivate: [RoleGuard],
      data: { roles: ['Help Desk'] }
    },
    {
      path: 'user-roster',
      component: PendingFrameworkListComponent,
      canActivate: [RoleGuard],
      data: { roles: ALL_ROLES_ELIGIBLE }
    },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientsModule { }
