import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { PendingApplicationListComponent } from '../pages/action-items/pending-application-list/pending-application-list.component';

const securityRoutes: Routes = [
    {
      path: 'permission-groups',
      component: PendingApplicationListComponent,
      canActivate: [RoleGuard],
      data: { roles: ['Administrator', 'Full Control']}
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(securityRoutes)
  ]
})
export class SecurityModule { }
