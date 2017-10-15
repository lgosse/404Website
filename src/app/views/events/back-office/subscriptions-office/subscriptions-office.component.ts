import { Component, OnInit } from "@angular/core";

import { FirebaseListObservable } from "angularfire2/database";

import { SubscriptionService } from "app/views/events/services/subscription.service";

import { User } from "app/models/user";

@Component({
  selector: "app-subscriptions-office",
  templateUrl: "./subscriptions-office.component.html",
  styleUrls: ["./subscriptions-office.component.scss"],
  providers: [SubscriptionService]
})
export class SubscriptionsOfficeComponent implements OnInit {
  public events: User[][];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit() {
    this.subscriptionService.getList().subscribe(events => {
      this.events = events;
    });
  }
}
