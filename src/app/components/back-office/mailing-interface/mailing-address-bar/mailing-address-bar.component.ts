import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MdSnackBar } from '@angular/material';

import { User } from 'app/classes/user';

import { MailingListsService } from 'app/services/mailing-lists.service';

@Component({
  selector: 'app-mailing-address-bar',
  templateUrl: './mailing-address-bar.component.html',
  styleUrls: ['./mailing-address-bar.component.scss'],
  providers: [ MailingListsService ]
})
export class MailingAddressBarComponent implements OnInit {

    mailingLists: [User[]];
    selectedLists: string[] = [];
    @Input()
    mails: User[] = [];
    @Output()
    updateMails = new EventEmitter<User[]>();

    constructor(
        private mailingListsService: MailingListsService,
        private snackBar: MdSnackBar
    ) { }

    ngOnInit() {
        this.mailingListsService.getMailingsLists().subscribe(lists => {
            this.mailingLists = lists;
        })
    }

    keys(list) : Array<string> {
        return Object.keys(list);
    }

    isMailSelected(email: string): boolean {
        for (let mail of this.mails) {
            if (mail.email === email) {
                return true;
            }
        }
        
        return false;
    }

    selectList(list: [User], listKey): void {
        if (this.selectedLists.indexOf(listKey) > -1) {
            return;
        } else {
            this.selectedLists.push(listKey);
        }

        let keys = this.keys(list);

        for (let key of keys) {
            if (this.isMailSelected(list[key].email)) {
                continue;
            }
            if (list[key].isAuthenticated === false) {
                continue;
            }
            this.mails.push(list[key]);
        }
        this.updateMails.emit(this.mails);
    }

    removeMail(toRemoveMail: User) {
        this.mails = this.mails.filter(mail => {
            return toRemoveMail.email !== mail.email;
        })
        this.updateMails.emit(this.mails);
    }

    resetSelectedAddresses(): void {
        this.selectedLists = [];
        this.mails = [];
        this.updateMails.emit(this.mails);
    }

    addMail(mail: any): void {
        if (this.isMailSelected(mail.value) ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.value) === false) {
            this.openSnackBar('The mail you entered is invalid or is already selected', 'CLOSE');

            return ;
        }

        this.mails.push({
            email: mail.value,
            isAuthenticated: true,
            login: 'anon',
            firstName: 'anon',
            lastName: 'anon'
        });

        this.updateMails.emit(this.mails);
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };
}
