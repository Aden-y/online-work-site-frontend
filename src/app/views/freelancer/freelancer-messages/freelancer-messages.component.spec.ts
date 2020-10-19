import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerMessagesComponent } from './freelancer-messages.component';

describe('FreelancerMessagesComponent', () => {
  let component: FreelancerMessagesComponent;
  let fixture: ComponentFixture<FreelancerMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
