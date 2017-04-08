import { Component, OnInit, Input } from '@angular/core';

import { SubscriptionService } from 'app/services/subscription.service';

import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-event-subscription',
  templateUrl: './event-subscription.component.html',
  styleUrls: ['./event-subscription.component.scss'],
  providers: [SubscriptionService]
})
export class EventSubscriptionComponent implements OnInit {

    @Input()
    event;
    logins: FirebaseListObservable<any>;

    constructor(
        private subscriptionService: SubscriptionService
    ) { }

    ngOnInit() {
        this.subscriptionService.getSubscriptionsEventLogins(this.event.$key)
            .subscribe(logins => {
                this.logins = logins;
            });
    }

}
