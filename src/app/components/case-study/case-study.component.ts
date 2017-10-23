import {Component, OnInit} from '@angular/core';
import {DataService} from '../../providers/data.service';
import {ActivatedRoute} from '@angular/router';
import {TreeNode} from 'primeng/primeng';
import { isUndefined } from 'util';
import { Message } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
  providers: [MessageService]
})
export class CaseStudyComponent implements OnInit {

  caseStudy: any;
  versions: TreeNode[];
  selectedNode: TreeNode;
  selectedVersion: TreeNode;

  constructor(private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService) { }

  ngOnInit() {
    this.dataService.getCaseStudy(this.activatedRoute.snapshot.params['id'])
      .subscribe( data => {
        this.caseStudy = data;
        this.versions = <TreeNode[]> data['versions'];
      });
  }

  nodeSelect(event) {
    this.selectedNode = event.node;
    this.updateSelectedVersion(this.selectedNode);
  }

  private updateSelectedVersion(node: TreeNode) {
    this.selectedVersion = (isUndefined(node.parent)) ? node : node.parent;
  }

  showIssues() {
    let msg: Message;
    if (this.selectedVersion.data.issues.length === 0) {
      msg = {severity: 'success', summary: 'OK!', detail: 'This version has no issues.'};
    } else {
      msg = {severity: 'warn', summary: 'Warning!', detail: 'Check version issues for more details.'};
    }
    this.messageService.add(msg);
  }

}
