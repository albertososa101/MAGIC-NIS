import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  // private host = 'http://localhost:8080';
  private host = 'http://192.168.100.84:5000';
  private api_prefix = '/nis_api';
  private local_base_url = '/assets/RESTful/';

  constructor(private http: HttpClient) { }


  getCaseStudiesList() {
    return this.http.get(this.host + this.api_prefix + '/case_studies/', { withCredentials: true });
  }

  getCaseStudy(caseStudyUrl: string) {
    return this.http.get(this.host + caseStudyUrl, { withCredentials: true });
  }

  getCaseStudyVersion(caseStudyVersionUrl: string) {
    return this.http.get(this.host + this.api_prefix + caseStudyVersionUrl, { withCredentials: true });
  }

  getViewResource(resourceUrl: string) {
    return this.http.get(this.host + this.api_prefix + resourceUrl, { withCredentials: true });
  }

}
