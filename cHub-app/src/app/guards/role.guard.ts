import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const requiredRoles = route.data['roles'] as Array<string>;
    const userRole = localStorage.getItem('userRole') as string;

    if (userRole && requiredRoles.includes(userRole)) {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }

  }
}


