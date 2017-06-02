import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'app/services/messages.service';

import { Message } from 'app/classes/message';

import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

    @Input()
    message: Message;
    cardState: string = 'fold';
    messageObservable: FirebaseObjectObservable<any>;

    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {
        this.messageObservable = this.messagesService.getMessageByKey(this.message.$key);
    }

    toggleState(): void {
        if (this.cardState === 'fold') {
            this.cardState = 'expanded';
        } else {
            this.cardState = 'fold';
        }
    }

    deleteMessage(): void {
        const message = {
            email: this.message.email,
            message: this.message.message,
            subject: this.message.subject,
            archived: true
        }
        this.messageObservable.update(message);
    }

    rollbackMessage(): void {
        const message = {
            email: this.message.email,
            message: this.message.message,
            subject: this.message.subject,
            archived: false            
        }
        this.messageObservable.update(message);
    }

}
