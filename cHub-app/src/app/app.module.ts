import { NgModule, Provider } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BasicTableComponent } from './shared/tables/basic-table/basic-table.component';
import { DashboardCardsComponent } from './shared/cards/dashboard-cards/dashboard-cards.component';
import { PendingUserListComponent } from './pages/action-items/pending-user-list/pending-user-list.component';
import { PendingApplicationListComponent } from './pages/action-items/pending-application-list/pending-application-list.component';
import { InteractiveTableComponent } from './shared/tables/interactive-table/interactive-table.component';
import { PendingFrameworkListComponent } from './pages/action-items/pending-framework-list/pending-framework-list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './layout/profile/profile.component';

const globalRippleConfig: Provider = {
  provide: MAT_RIPPLE_GLOBAL_OPTIONS,
  useValue: { disabled: true },
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    BasicTableComponent, 
    DashboardCardsComponent, 
    PendingUserListComponent, 
    PendingApplicationListComponent, 
    InteractiveTableComponent, 
    PendingFrameworkListComponent, 
    LoginComponent, 
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule
    
  ],
  providers: [globalRippleConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
