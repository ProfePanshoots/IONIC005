import { TestBed } from '@angular/core/testing';

import { JugadoresserviceService } from './jugadoresservice.service';

describe('JugadoresserviceService', () => {
  let service: JugadoresserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
