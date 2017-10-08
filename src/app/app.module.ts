import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { CaseStudyVersionComponent } from './components/case-study-version/case-study-version.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthService } from './providers/auth.service';
import { AuthGuardService } from './providers/auth-guard.service';
import { DataService } from './providers/data.service';
import { TruncatePipe } from './pipes/truncate.pipe';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], children:
  [
    { path: '', redirectTo: 'case-studies', pathMatch: 'full' },
    { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
    { path: 'case-studies', component: CaseStudiesComponent, canActivate: [AuthGuardService] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService] },
    { path: 'help', component: HelpComponent, canActivate: [AuthGuardService] },
  ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

const fireConfig = {
  apiKey: 'AIzaSyB3vGlTygWAo2_jyupIjsSiMbkuNlQE8DY',
  authDomain: 'magic-nis.firebaseapp.com',
  databaseURL: 'https://magic-nis.firebaseio.com',
  projectId: 'magic-nis',
  storageBucket: 'magic-nis.appspot.com',
  messagingSenderId: '259794015810'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    HelpComponent,
    EditProfileComponent,
    CaseStudiesComponent,
    CaseStudyComponent,
    CaseStudyVersionComponent,
    PageNotFoundComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(fireConfig),
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [AuthService, AuthGuardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
