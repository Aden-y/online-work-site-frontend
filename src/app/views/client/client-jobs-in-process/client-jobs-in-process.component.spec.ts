import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobsInProcessComponent } from './client-jobs-in-process.component';

describe('ClientJobsInProcessComponent', () => {
  let component: ClientJobsInProcessComponent;
  let fixture: ComponentFixture<ClientJobsInProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobsInProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobsInProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
