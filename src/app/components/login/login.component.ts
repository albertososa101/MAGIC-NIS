import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectedFromProvider: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.redirectedFromProvider = (this.authService.getUser() !== null);
  }

  /**
   * PROVIDERS:
   * 1 --> Facebook
   * 2 --> Google
   * 3 --> Twitter
   * 4 --> GitHub
   */
  loginWithProvider(provider: number) {
    this.authService.login(provider);
  }

}
