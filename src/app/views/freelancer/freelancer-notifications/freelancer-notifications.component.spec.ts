import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerNotificationsComponent } from './freelancer-notifications.component';

describe('FreelancerNotificationsComponent', () => {
  let component: FreelancerNotificationsComponent;
  let fixture: ComponentFixture<FreelancerNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
