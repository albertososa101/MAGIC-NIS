import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCaseStudiesList() {
    return this.http.get('/assets/RESTful/case_studies.json');
  }

  getCaseStudy(caseStudyUuid: number) {
    return this.http.get('/assets/RESTful/case_studies/' + caseStudyUuid + '/short.json');
  }

  getCaseStudyVersion(caseStudyUuid: number, versionUuid: number) {
    return this.http.get('/assets/RESTful/case_studies/' + caseStudyUuid + '/' + versionUuid + '/long.json');
  }
}
