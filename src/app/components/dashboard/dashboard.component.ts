import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LogoutDialogComponent } from './logout-dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName: string;
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {
    this.authService.getAuthState().subscribe( user => {
      this.isLoggedIn = (user !== null);
      this.userName = (this.isLoggedIn) ? user.displayName : 'Sign in';
    });
  }

  openDialog() {
    this.dialog.open(LogoutDialogComponent);
  }

  redirectToLoginPage() {
    this.router.navigate(['login']);
  }
}
