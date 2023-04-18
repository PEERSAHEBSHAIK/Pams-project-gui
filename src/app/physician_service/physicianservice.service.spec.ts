import { TestBed } from '@angular/core/testing';

import { PhysicianserviceService } from './physicianservice.service';

describe('PhysicianserviceService', () => {
  let service: PhysicianserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicianserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
