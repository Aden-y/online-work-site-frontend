import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBiddingComponent } from './order-bidding.component';

describe('OrderBiddingComponent', () => {
  let component: OrderBiddingComponent;
  let fixture: ComponentFixture<OrderBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
