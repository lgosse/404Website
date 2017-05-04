import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { Message } from 'app/classes/message';
import { MessagesService } from 'app/services/messages.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    providers: [MessagesService]
})
export class MessagesComponent implements OnInit {

    messages: FirebaseListObservable<any>;

    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.messagesService.getMessages()
            .subscribe(messages => {
                this.messages = messages;
            })
    }

}
