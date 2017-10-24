import { Component, OnInit } from '@angular/core';
import {DataService} from '../../providers/data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-case-study-version',
  templateUrl: './case-study-version.component.html',
  styleUrls: ['./case-study-version.component.scss']
})
export class CaseStudyVersionComponent implements OnInit {

  private caseStudyUuid: any;
  private versionUuid: any;
  private version: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this.caseStudyUuid = params['case_study_uuid'];
      this.versionUuid = params['version_uuid'];
    });
    this.dataService.getCaseStudyVersion(this.caseStudyUuid, this.versionUuid)
      .subscribe(data => {
        this.version = data;
        console.log('VERSION', data);
      });
  }

}
