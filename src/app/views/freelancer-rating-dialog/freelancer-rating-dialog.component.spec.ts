import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerRatingDialogComponent } from './freelancer-rating-dialog.component';

describe('FreelancerRatingDialogComponent', () => {
  let component: FreelancerRatingDialogComponent;
  let fixture: ComponentFixture<FreelancerRatingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerRatingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerRatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
