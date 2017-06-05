import { Component, OnInit } from '@angular/core';

import { MdSnackBar } from '@angular/material'

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
    mails: User[] = [];
    fromEmail: string = 'noreply@bde.42.fr';
    subject: string = '';

    constructor(
        private mailingListsService: MailingListsService,
        private snackBar: MdSnackBar
    ) { }

    ngOnInit() {
    }

    updateMailBody(event: string): void {
        this.mailBody = event;
    }

    updateSelectedMails(event: User[]): void {
        this.mails = event;
    }

    updateFrom(event: string): void {
        this.fromEmail = event;
    }

    updateSubject(event: string): void {
        this.subject = event;
    }

    sendMail(): void {
        let mails: string[] = [];
        let html: string = document.getElementById('markdown').innerHTML;
        let from: string = '';

        for (let mail of this.mails) {
            mails.push(mail.email);
        }

        if (this.fromEmail === '') {
            this.fromEmail = 'noreply@bde.42.fr';
        }

        if (html === '') {
            this.openSnackBar('The mail body cannot be empty', 'CLOSE');

            return ;
        }

        if (this.subject === '') {
            this.openSnackBar('The mail subject cannot be empty', 'CLOSE');

            return ;
        }

        if (mails === []) {
            this.openSnackBar('You haven\'t selected any email address', 'CLOSE');

            return ;
        }

        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.fromEmail) === false) {
            this.openSnackBar('The \'from\' email is invalid', 'CLOSE');

            return ;
        }

        from = this.fromEmail;

        this.mailingListsService.sendMail(from, this.subject, mails, html);

        this.mailBody = '';
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };
}
