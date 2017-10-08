import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

  caseStudies: Object;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getCaseStudiesList()
     .subscribe(data => this.caseStudies = data);
  }
}
