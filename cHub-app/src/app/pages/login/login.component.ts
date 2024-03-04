import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
import { APP_ROLES } from 'src/app/constants/roles.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
    APP_ROLES = APP_ROLES;

    constructor(private router: Router, private authService: AuthService) {}

    setRole(role: string): void {
      this.authService.setUserRole(role);
      this.router.navigate(['/dashboard']);
    }
}
