import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../providers/data.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  @Input() caseStudyVersionsPath: string;

  caseStudyVersions: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCaseStudy(this.caseStudyVersionsPath)
      .subscribe( data => this.caseStudyVersions = data);
  }
}
