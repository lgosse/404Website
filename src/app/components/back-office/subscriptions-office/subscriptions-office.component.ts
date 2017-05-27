import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { SubscriptionService } from 'app/services/subscription.service';

@Component({
  selector: 'app-subscriptions-office',
  templateUrl: './subscriptions-office.component.html',
  styleUrls: ['./subscriptions-office.component.scss'],
  providers: [ SubscriptionService ]
})
export class SubscriptionsOfficeComponent implements OnInit {

  events: FirebaseListObservable<any>;

    constructor(
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit() {
        this.subscriptionService.getSubscriptions()
            .subscribe(events => {
                this.events = events
            })
    }

}
