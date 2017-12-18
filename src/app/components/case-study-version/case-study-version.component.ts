import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-case-study-version',
  templateUrl: './case-study-version.component.html',
  styleUrls: ['./case-study-version.component.scss']
})
export class CaseStudyVersionComponent implements OnInit {

  private caseStudyVersionUrl: any;
  private version: any;

  view: any;

  commands: TreeNode[];
  variables: TreeNode[];
  selectedNode: TreeNode;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this.caseStudyVersionUrl = params['version_resource'];
    });
    this.dataService.getCaseStudyVersion(this.caseStudyVersionUrl)
      .subscribe(data => {
        this.version = data;
        this.commands = <TreeNode[]> data['commands'];
        this.variables = <TreeNode[]> data['variables'];
      });
  }

  commandNodeSelect(event) {
    this.displayView(event.node.data.definition);
  }

  variableNodeSelect(event) {
    this.displayView(event.node.data.view);
  }

  displayView(url) {
    this.dataService.getViewResource(url)
      .subscribe( data => this.view = data);
  }

}
