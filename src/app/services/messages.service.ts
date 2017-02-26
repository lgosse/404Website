import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Message } from 'app/classes/message';

@Injectable()
export class MessagesService {

    messages: FirebaseListObservable<any>;

    constructor(
        private af: AngularFire,
    ) {
        this.messages = af.database.list('/contact');
    }

    getMessages(): FirebaseListObservable<any> {
        return this.messages;
    }

    getMessageByKey(key: string): FirebaseObjectObservable<any> {
        return this.af.database.object('/contact/' + key);
    }

    deleteMessage(key: string): void {
        this.messages.remove(key);
    }

}
