/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailingService } from './mailing.service';

describe('MailingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailingService]
    });
  });

  it('should ...', inject([MailingService], (service: MailingService) => {
    expect(service).toBeTruthy();
  }));
});
