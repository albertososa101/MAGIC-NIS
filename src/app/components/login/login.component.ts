import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }
  loginWithTwitter() {
    this.authService.loginWithTwitter();
  }
  loginWithGitHub() {
    this.authService.loginWithGitHub();
  }
}
