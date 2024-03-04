import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { USER_MANAGEMENT_ELIGIBLE } from '../constants/roles.constants';
import { PendingUserListComponent } from '../pages/action-items/pending-user-list/pending-user-list.component';
import { PendingFrameworkListComponent } from '../pages/action-items/pending-framework-list/pending-framework-list.component';
const supportRoutes: Routes = [
  {
    path: 'tickets',
    component: PendingUserListComponent,
    canActivate: [RoleGuard],
    data: { roles: USER_MANAGEMENT_ELIGIBLE }
  },
  {
    path: 'help-desk',
    component: PendingFrameworkListComponent,
    canActivate: [RoleGuard],
    data: { roles: USER_MANAGEMENT_ELIGIBLE }
  },
  {
    path: 'faq',
    component: PendingUserListComponent,
    canActivate: [RoleGuard],
    data: { roles: USER_MANAGEMENT_ELIGIBLE }
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(supportRoutes)
  ]
})
export class SupportModule { }
