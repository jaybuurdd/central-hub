import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  private subscription: Subscription = new Subscription();
  userRole: string | null = null;

  constructor(private authService: AuthService, private router: Router, private cdRef: ChangeDetectorRef){}
  
  onLogout() {
    this.authService.removeUserRole();
    this.router.navigate(['/login']).then(() => {
      this.cdRef.detectChanges();
    });
  }
}
