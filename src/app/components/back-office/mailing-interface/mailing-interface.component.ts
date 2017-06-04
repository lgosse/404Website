import { Component, OnInit } from '@angular/core';

import { User } from 'app/classes/user';

import { MailingListsService } from 'app/services/mailing-lists.service';

@Component({
  selector: 'app-mailing-interface',
  templateUrl: './mailing-interface.component.html',
  styleUrls: ['./mailing-interface.component.scss'],
  providers: [ MailingListsService ]
})
export class MailingInterfaceComponent implements OnInit {

    mailBody: string = '';
    mails: User[];

    constructor(
        private mailingListsService: MailingListsService
    ) { }

    ngOnInit() {
    }

    updateMailBody(event: string): void {
        this.mailBody = event;
    }

    updateSelectedMails(event: User[]): void {
        this.mails = event;
    }

    sendMail(): void {
        let mails: string[] = [];
        let html: string = document.getElementById('markdown').innerHTML;

        for (let mail of this.mails) {
            mails.push(mail.email);
        }

        if (html === '' || mails === []) {
            return ;
        }

        this.mailingListsService.sendMail(mails, html);
    }

}
