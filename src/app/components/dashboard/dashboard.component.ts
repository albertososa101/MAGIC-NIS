import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName: string;
  authService: AuthService;

  constructor(private _authService: AuthService, private router: Router, private dialog: MatDialog) {
    this.authService = _authService;
    this.authService.getAuthState().subscribe( user => {
      this.userName = (this.authService.isLoggedIn()) ? user.displayName : 'Sign in';
    });
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.dialog.open(LogoutDialogComponent);
  }

}
