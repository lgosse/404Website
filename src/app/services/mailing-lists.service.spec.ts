import { TestBed, inject } from '@angular/core/testing';

import { MailingListsService } from './mailing-lists.service';

describe('MailingListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailingListsService]
    });
  });

  it('should be created', inject([MailingListsService], (service: MailingListsService) => {
    expect(service).toBeTruthy();
  }));
});
