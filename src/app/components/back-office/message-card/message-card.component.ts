import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'app/services/messages.service';

import { Message } from 'app/classes/message';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

    @Input()
    message: Message;
    cardState: string = 'fold';

    constructor(
        private messagesService: MessagesService
    ) { }

    ngOnInit() {

    }

    toggleState(): void {
        if (this.cardState === 'fold') {
            this.cardState = 'expanded';
        } else {
            this.cardState = 'fold';
        }
    }

    deleteMessage(): void {
        this.messagesService.deleteMessage(this.message.$key);
    }

}
