import { Component, OnInit } from "@angular/core";

import { FirebaseListObservable } from "angularfire2/database";

import { Message } from "app/models/message";
import { MessagesService } from "app/views/idea-box/services/messages.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  messages: Message[];

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getList().subscribe(messages => {
      this.messages = messages;
    });
  }
}
