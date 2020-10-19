import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobsCancelledComponent } from './client-jobs-cancelled.component';

describe('ClientJobsCancelledComponent', () => {
  let component: ClientJobsCancelledComponent;
  let fixture: ComponentFixture<ClientJobsCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobsCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobsCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
