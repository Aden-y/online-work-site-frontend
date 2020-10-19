import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetalisComponent } from './job-detalis.component';

describe('JobDetalisComponent', () => {
  let component: JobDetalisComponent;
  let fixture: ComponentFixture<JobDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
