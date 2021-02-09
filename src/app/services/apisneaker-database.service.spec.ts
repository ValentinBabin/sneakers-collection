import { TestBed } from '@angular/core/testing';

import { APISneakerDatabaseService } from './apisneaker-database.service';

describe('APISneakerDatabaseService', () => {
  let service: APISneakerDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APISneakerDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
