import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerNavComponent } from './freelancer-nav.component';

describe('FreelancerNavComponent', () => {
  let component: FreelancerNavComponent;
  let fixture: ComponentFixture<FreelancerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
