import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobsCompletedComponent } from './client-jobs-completed.component';

describe('ClientJobsCompletedComponent', () => {
  let component: ClientJobsCompletedComponent;
  let fixture: ComponentFixture<ClientJobsCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobsCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
