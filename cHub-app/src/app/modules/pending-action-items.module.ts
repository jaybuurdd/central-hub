import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PendingUserListComponent } from '../pages/action-items/pending-user-list/pending-user-list.component';
import { PendingApplicationListComponent } from '../pages/action-items/pending-application-list/pending-application-list.component';
import { PendingFrameworkListComponent } from '../pages/action-items/pending-framework-list/pending-framework-list.component';
import { RoleGuard } from 'src/app/guards/role.guard';

const pendingActionItemsRoutes: Routes = [
  {
    path: 'pending-users',
    component: PendingUserListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Help Desk'] } 
  },
  {
    path: 'pending-applications',
    component: PendingApplicationListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Help Desk'] } 
  },
  {
    path: 'pending-frameworks',
    component: PendingFrameworkListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Help Desk'] } 
  },
  {
    path: 'pending-access',
    component: PendingApplicationListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Administrator'] } 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pendingActionItemsRoutes)
  ]
})
export class PendingActionItemsModule { }
