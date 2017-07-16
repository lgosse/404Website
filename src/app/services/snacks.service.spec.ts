import { TestBed, inject } from '@angular/core/testing';

import { SnacksService } from './snacks.service';

describe('SnacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnacksService]
    });
  });

  it('should be created', inject([SnacksService], (service: SnacksService) => {
    expect(service).toBeTruthy();
  }));
});
