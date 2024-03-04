import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavItem, NAV_ITEMS } from 'src/app/constants/navigation.constants';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})

export class SidebarComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  userRole: string | null = null;

  public isExpanded = true;
  navItems: NavItem[] = [];
  public validRolesForBottomNav = ['Administrator', 'Full Control',
    'Download', 'Read'];

  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();

    this.loadNavItems();
    this.prepareNavItems(this.navItems);

    this.subscription.add(
      this.authService.userRoleChanged.subscribe((role) => {
        this.userRole = role;
        this.loadNavItems();
        this.prepareNavItems(this.navItems);
        this.cdRef.detectChanges();
      })
    );
    
  }

  loadNavItems() {
    this.navItems = NAV_ITEMS.filter(item => item.roles.includes(this.userRole || ''));
  }

  prepareNavItems(navItems: NavItem[]) {

    navItems.forEach(item => {
   
      if (item.children && item.children.length > 0) {
        this.prepareNavItems(item.children);
      }
    });
  }

  hasBottomNav(): boolean {
    const userRole = this.userRole || '';
    return this.validRolesForBottomNav.some(role => userRole.includes(role));
  }

  toggleItem(item: NavItem): void {
    item.expanded = !item.expanded;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
