import { TestBed } from '@angular/core/testing';

import { DaraSharingServiceService } from './dara-sharing.service.service';

describe('DaraSharingServiceService', () => {
  let service: DaraSharingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaraSharingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
