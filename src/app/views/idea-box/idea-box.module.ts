import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { IdeaBoxComponent } from "app/views/idea-box/idea-box.component";
import { MessagesComponent } from "app/views/idea-box/back-office/messages/messages.component";
import { MessageCardComponent } from "app/views/idea-box/back-office/messages/message-card/message-card.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [IdeaBoxComponent, MessagesComponent, MessageCardComponent]
})
export class IdeaBoxModule {}
