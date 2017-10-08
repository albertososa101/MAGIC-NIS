import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName: string;

  constructor(private authService: AuthService) {
    this.userName = authService.user.displayName;
  }

  logout() {
    this.authService.logout();
  }
}
