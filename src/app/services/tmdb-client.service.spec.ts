import { TestBed } from '@angular/core/testing';

import { TmdbClientService } from './tmdb-client.service';

describe('TmdbClientService', () => {
  let service: TmdbClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
