import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';

async function delay(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

  caseStudies: any;
  authService: AuthService;
  dataService: DataService;

  constructor(private _dataService: DataService, private _authService: AuthService) {
    this.authService = _authService;
    this.dataService = _dataService;
  }

  async waitForInteractiveSession() {
    while (!this.authService.getInteractiveSessionOpened()) {
      await delay(100);
    }
  }

  async ngOnInit() {
    this.caseStudies = [];
    await this.waitForInteractiveSession();
    this._dataService.getCaseStudiesList()
      .subscribe(data => this.caseStudies = data);
  }

}
