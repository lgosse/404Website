import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Message } from 'app/classes/message';

@Injectable()
export class MessagesService {

    messages: FirebaseListObservable<any>;

    constructor(
        private af: AngularFireDatabase,
    ) {
        this.messages = af.list('/contact');
    }

    getMessages(): FirebaseListObservable<any> {
        return this.messages;
    }

    getMessageByKey(key: string): FirebaseObjectObservable<any> {
        return this.af.object('/contact/' + key);
    }

    deleteMessage(key: string): void {
        this.messages.remove(key);
    }

}
