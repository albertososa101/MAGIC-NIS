import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  interactiveSessionOpened: boolean;

  private user: firebase.User;
  private authState$: Observable<firebase.User>;

  private base_url = 'https://one.nis.magic-nexus.eu/nis_api';
  options: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.authState$ = afAuth.authState;
    this.authState$.subscribe( user => {
      this.user = user;
      if (this.user) {
        this.updateToken(this.user.refreshToken);
        this.setIdentity()
          .subscribe(
            success => console.log('identity', success),
            error => console.error('identity', error));
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

  logout() {
    return this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.user !== null;
  }

  /** ------------------------------------------------------------- */

  updateToken(token: string) {
    if (token == null) {
      this.options = { withCredentials: true };
    } else {
      const headers = new HttpHeaders({'Authorization' : 'Bearer ' + token});
      this.options = { withCredentials: true, headers};
    }
    console.log('optiones', this.options);
  }

  openInteractiveSession() {
    return this.http.post(this.base_url + '/isession', null, this.options);
  }

  setInteractiveSessionOpened(state: boolean) {
    this.interactiveSessionOpened = state;
  }

  getInteractiveSessionOpened() {
    return this.interactiveSessionOpened;
  }

  setIdentity() {
    return this.http.put(this.base_url + '/isession/identity?user=test_user', null, this.options);
  }

}
