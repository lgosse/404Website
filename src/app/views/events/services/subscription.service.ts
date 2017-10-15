import { Injectable, Injector } from "@angular/core";
import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { ContactForm } from "app/models/contact-form";
import { User } from "app/models/user";

@Injectable()
export class SubscriptionService extends FirebaseWrapperService<User[]> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/subscriptions";
  }

  subscribe(event: string, login: string): void {
    this.getSubList(event).push(login);
  }

  removeSubscription(event: string, login: string): void {
    this.getSubListItem(event, login).remove();
  }
}
