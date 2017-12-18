import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  interactiveSessionOpened: boolean;

  private user: firebase.User;
  private authState$: Observable<firebase.User>;

  // private base_url = 'http://localhost:8080/nis_api';
  private base_url = 'http://192.168.100.84:5000/nis_api';
  private local_base_url = '/assets/RESTful/';

  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.authState$ = afAuth.authState;
    this.authState$.subscribe( user => {
      this.user = user;
      if (this.user) {
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

  openInteractiveSession() {
    return this.http.post(this.base_url + '/isession', null, { withCredentials: true });
  }

  setInteractiveSessionOpened(state: boolean) {
    this.interactiveSessionOpened = state;
  }

  getInteractiveSessionOpened() {
    return this.interactiveSessionOpened;
  }

  setIdentity() {
    return this.http.put(this.base_url + '/isession/identity?user=test_user', null, { withCredentials: true });
  }

}
