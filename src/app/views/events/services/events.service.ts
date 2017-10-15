import { Injectable, Injector } from "@angular/core";
import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { EventBde } from "app/models/eventBde";

@Injectable()
export class EventsService extends FirebaseWrapperService<EventBde> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "events";
  }
}
