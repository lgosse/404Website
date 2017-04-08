import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ContactForm } from 'app/classes/contact-form';

@Injectable()
export class SubscriptionService {

    subscription: FirebaseListObservable<any>;

    constructor(
      private af: AngularFire
    ) { }

    subscribe(event: string, login: string): void {
        this.subscription = this.af.database.list('/subscriptions/' + event);
        this.subscription.push(login);
    }

    getSubscriptions(): FirebaseListObservable<any> {
        return this.af.database.list('/subscriptions');
    }

    getSubscriptionsEventLogins(event: string): FirebaseListObservable<any> {
        return this.af.database.list('/subscriptions/' + event);
    }

    removeSubscriptionsEventLogin(loginKey: string, eventKey: string): void {
        this.af.database.list('/subscriptions/' + eventKey).remove(loginKey);
    }

}
