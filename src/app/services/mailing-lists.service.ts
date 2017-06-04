import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'app/classes/user';

@Injectable()
export class MailingListsService {

    constructor(private af: AngularFireDatabase) { }

    getMailingsLists(): FirebaseListObservable<[[User]]> {
        return this.af.list('/mails');
    }

    getMailingListByName(listKey: string): FirebaseListObservable<[User]> {
        return this.af.list('/mails/' + listKey);
    }

    getMailingListUser(listKey: string, user: string): FirebaseObjectObservable<User> {
        return this.af.object('/mails/' + listKey + '/' + user);
    }

    updateMail(listKey, userKey, user): void {
        this.af.object('/mails/' + listKey + '/' + userKey).update(user);
    }

    addMailComplete(listKey, user: User): void {
        this.af.list('/mails/' + listKey).push(user);
    }

    addMail(listKey, mail): void {
        this.af.list('/mails/' + listKey).push({
            email: mail,
            firstName: 'anon',
            isAuthenticated: true,
            login: 'anon',
            lastName:'anon'
        });
    }

    sendMail(listMails, mailHtml): void {
        console.log(listMails, mailHtml);
    }

}
