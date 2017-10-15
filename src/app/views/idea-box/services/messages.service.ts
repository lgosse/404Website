import { Injectable, Injector } from "@angular/core";
import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { Message } from "app/models/message";

@Injectable()
export class MessagesService extends FirebaseWrapperService<Message> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/contact";
  }
}
