import { Component, OnInit, Input } from "@angular/core";

import { SubscriptionService } from "app/views/events/services/subscription.service";

import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-event-subscription",
  templateUrl: "./event-subscription.component.html",
  styleUrls: ["./event-subscription.component.scss"],
  providers: [SubscriptionService]
})
export class EventSubscriptionComponent implements OnInit {
  @Input() event;
  new: any = {
    login: ""
  };
  logins: FirebaseListObservable<any>;

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit() {
    this.subscriptionService.getSubList(this.event.$key).subscribe(logins => {
      this.logins = logins;
    });
  }

  subscribe(eventTitle: string, login: string): void {
    if (login === null || login.trim() === "") {
      return;
    }
    this.subscriptionService.subscribe(eventTitle, login);
  }
}
