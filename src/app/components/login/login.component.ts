import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    // Temporal solution for view access for logged users
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginWithFacebook() {
    this.authService.login(1);
  }
  loginWithGoogle() {
    this.authService.login(2);
  }
  loginWithTwitter() {
    this.authService.login(3);
  }
  loginWithGitHub() {
    this.authService.login(4);
  }
}
