import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInBiddingComponent } from './orders-in-bidding.component';

describe('OrdersInBiddingComponent', () => {
  let component: OrdersInBiddingComponent;
  let fixture: ComponentFixture<OrdersInBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersInBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersInBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
