import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { CaseStudyVersionComponent } from './components/case-study-version/case-study-version.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: 
  [
    { path: '', redirectTo: 'case-studies', pathMatch: 'full' },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'case-studies', component: CaseStudiesComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'help', component: HelpComponent },  
  ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    HelpComponent,
    CaseStudiesComponent,
    MyProfileComponent,
    CaseStudyComponent,
    CaseStudyVersionComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
