import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  host = 'https://one.nis.magic-nexus.eu';
  api_prefix = '/nis_api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCaseStudiesList() {
    return this.http.get(this.host + this.api_prefix + '/case_studies/', this.authService.options);
  }

  getCaseStudy(caseStudyUrl: string) {
    return this.http.get(this.host + caseStudyUrl, this.authService.options);
  }

  getCaseStudyVersion(caseStudyVersionUrl: string) {
    return this.http.get(this.host + caseStudyVersionUrl, this.authService.options);
  }

  getViewResource(resourceUrl: string) {
    return this.http.get(this.host + resourceUrl, this.authService.options);
  }

}
