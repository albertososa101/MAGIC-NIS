import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/primeng';
import { isUndefined } from 'util';
import { MessageService } from 'primeng/components/common/messageservice';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
  providers: [MessageService]
})
export class CaseStudyComponent implements OnInit {

  caseStudy: any;
  authService: AuthService;
  versions: TreeNode[];
  selectedVersion: TreeNode;
  msgs: any;

  constructor(private _authService: AuthService,
              private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService) {
    this.authService = _authService;
  }

  ngOnInit() {
    this.dataService.getCaseStudy(this.activatedRoute.snapshot.params['case_study'])
      .subscribe( data => {
        this.caseStudy = data;
        this.versions = <TreeNode[]> data['versions'];
      });
  }

  nodeSelect(event) {
    this.selectedVersion = (isUndefined(event.node.parent)) ? event.node : event.node.parent;
    console.log(this.selectedVersion.data.resource);
  }

  showIssues() {
    if (this.selectedVersion.data.issues == null || this.selectedVersion.data.issues.length === 0) {
      this.messageService.add({severity: 'success', summary: 'OK!', detail: 'This version has no issues.'});
    } else {
      this.messageService.add({severity: 'warn', summary: 'Warning!', detail: 'Check version issues for more details.'});
    }
  }

}
