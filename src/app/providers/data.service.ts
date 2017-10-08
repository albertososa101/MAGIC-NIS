import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCaseStudiesList() {
    return this.http.get('../../../assets/RESTful/case_studies.json');
  }

  getCaseStudy(caseStudyPath: string) {
    return this.http.get('../../../assets/RESTful/' + caseStudyPath);
  }
}
