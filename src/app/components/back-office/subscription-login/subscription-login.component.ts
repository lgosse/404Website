import { Component, OnInit, Input } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

import { SubscriptionService } from 'app/services/subscription.service';

@Component({
    selector: 'app-subscription-login',
    templateUrl: './subscription-login.component.html',
    styleUrls: ['./subscription-login.component.scss']
})
export class SubscriptionLoginComponent implements OnInit {

    @Input()
    login;
    @Input()
    event;

    constructor(
        private subscriptionService : SubscriptionService
    ) { }

    ngOnInit() {
    }

    deleteSubscription(): void {
        this.subscriptionService.removeSubscriptionsEventLogin(this.login.$key, this.event);
    }

}
