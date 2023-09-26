import { TestBed } from '@angular/core/testing';

import { UserrandomService } from './userrandom.service';

describe('UserrandomService', () => {
  let service: UserrandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserrandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
