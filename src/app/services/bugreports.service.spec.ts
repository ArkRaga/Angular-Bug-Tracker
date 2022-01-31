import { TestBed } from '@angular/core/testing';

import { BugreportsService } from './bugreports.service';

describe('BugreportsService', () => {
  let service: BugreportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugreportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
