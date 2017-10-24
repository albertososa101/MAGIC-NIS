import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: firebase.User;
  public authState$: Observable<firebase.User>;
  private authProvider: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authState$ = afAuth.authState;
    this.authState$.subscribe( user => {
      console.log('USER', user);
      this.user = user;
    } );
  }

  login(provider: number) {
    switch (provider) {
      case 1: this.authProvider = new firebase.auth.FacebookAuthProvider();
              break;
      case 2: this.authProvider = new firebase.auth.GoogleAuthProvider();
              break;
      case 3: this.authProvider = new firebase.auth.TwitterAuthProvider();
              break;
      case 4: this.authProvider = new firebase.auth.GithubAuthProvider();
    }
    this.afAuth.auth.signInWithPopup(this.authProvider)
      .then( success => {
        this.router.navigate(['dashboard']);
      })
      .catch( error => console.error('ERROR', error));
  }

  logout() {
    this.afAuth.auth.signOut().then( success => {
      this.router.navigate(['login']);
    });
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }
}
