import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.html',
  styleUrls: ['./logout-dialog.scss']
})
export class LogoutDialogComponent {

  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>, private authService: AuthService) { }

  logout() {
    this.authService.logout()
      .then( success => this.dialogRef.close())
      .catch( error => console.error(error)); // TODO show error dialog
  }

}
