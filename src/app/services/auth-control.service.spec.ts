import { TestBed } from '@angular/core/testing';

import { AuthControlService } from './auth-control.service';

describe('AuthControlService', () => {
  let service: AuthControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
