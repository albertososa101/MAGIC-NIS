import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.updateToken(null);
    if (!this.authService.getInteractiveSessionOpened()) {
      this.authService.openInteractiveSession()
        .subscribe(
          success => {
                  console.log('InteractiveSession', success);
                  this.authService.setInteractiveSessionOpened(true);
                },
          error => {
                  console.error('InteractiveSession', error);
                  this.authService.setInteractiveSessionOpened(true);
                }
        );
    }
  }

}
