import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobsInBiddingComponent } from './client-jobs-in-bidding.component';

describe('ClientJobsInBiddingComponent', () => {
  let component: ClientJobsInBiddingComponent;
  let fixture: ComponentFixture<ClientJobsInBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobsInBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobsInBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
