import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyVersionComponent } from './case-study-version.component';

describe('CaseStudyVersionComponent', () => {
  let component: CaseStudyVersionComponent;
  let fixture: ComponentFixture<CaseStudyVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
