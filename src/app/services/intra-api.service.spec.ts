import { TestBed, inject } from '@angular/core/testing';

import { IntraApiService } from './intra-api.service';

describe('IntraApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntraApiService]
    });
  });

  it('should be created', inject([IntraApiService], (service: IntraApiService) => {
    expect(service).toBeTruthy();
  }));
});
