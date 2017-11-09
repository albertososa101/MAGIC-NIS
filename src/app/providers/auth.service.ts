import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: firebase.User;
  private authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authState$ = afAuth.authState;
    this.authState$.subscribe( user => this.user = user );
    this.afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  login(provider: number) {
    let authProvider: firebase.auth.AuthProvider;
    switch (provider) {
      case 1: authProvider = new firebase.auth.FacebookAuthProvider();
              break;
      case 2: authProvider = new firebase.auth.GoogleAuthProvider();
              break;
      case 3: authProvider = new firebase.auth.TwitterAuthProvider();
              break;
      case 4: authProvider = new firebase.auth.GithubAuthProvider();
    }
    this.afAuth.auth.signInWithRedirect(authProvider);
  }

  getAuthState(): Observable<firebase.User> {
    return this.authState$;
  }

  getUser() {
    return this.user;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
