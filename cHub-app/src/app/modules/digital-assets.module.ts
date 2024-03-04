import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { ALL_ROLES_ELIGIBLE, DIGITAL_ASSETS_APP_ELIGIBLE, MY_DOCUMENTS_ELIGIBLE } from '../constants/roles.constants';
import { PendingUserListComponent } from '../pages/action-items/pending-user-list/pending-user-list.component';
import { PendingFrameworkListComponent } from '../pages/action-items/pending-framework-list/pending-framework-list.component';
import { PendingApplicationListComponent } from '../pages/action-items/pending-application-list/pending-application-list.component';
const digitalAssetsRoutes: Routes = [
  {
    path: 'applications',
    component: PendingUserListComponent,
    canActivate: [RoleGuard],
    data: { roles:DIGITAL_ASSETS_APP_ELIGIBLE } 
  },
  {
    path: 'frameworks',
    component: PendingFrameworkListComponent,
    canActivate: [RoleGuard],
    data: { roles: ALL_ROLES_ELIGIBLE } 
  },
  {
    path: 'library',
    component: PendingApplicationListComponent,
    canActivate: [RoleGuard],
    data: { roles: ALL_ROLES_ELIGIBLE } 
  },
  {
    path: 'upload-framework',
    component: PendingUserListComponent,
    canActivate: [RoleGuard],
    data: { roles: 'Administrator' } 
  },
  {
    path: 'my-documents',
    component: PendingApplicationListComponent,
    canActivate: [RoleGuard],
    data: { roles: MY_DOCUMENTS_ELIGIBLE } 
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(digitalAssetsRoutes)
  ]
})
export class DigitalAssetsModule { }
