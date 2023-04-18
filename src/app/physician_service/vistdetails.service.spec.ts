import { TestBed } from '@angular/core/testing';

import { VistdetailsService } from './vistdetails.service';

describe('VistdetailsService', () => {
  let service: VistdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
