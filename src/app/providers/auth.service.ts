import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: firebase.User;
  public authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = null;
    this.authState$ = afAuth.authState;
    this.authState$.subscribe( (user: firebase.User) => {
      if (user !== null) {
        this.user = user;
        this.router.navigate(['dashboard']);
      }
    } );
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  loginWithFacebook() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }
  loginWithTwitter() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }
  loginWithGitHub() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
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
