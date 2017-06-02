import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { ContactForm } from 'app/classes/contact-form';

@Injectable()
export class SubscriptionService {

    subscription: FirebaseListObservable<any>;

    constructor(
      private af: AngularFireDatabase
    ) { }

    subscribe(event: string, login: string): void {
        this.subscription = this.af.list('/subscriptions/' + event);
        this.subscription.push(login);
    }

    getSubscriptions(): FirebaseListObservable<any> {
        return this.af.list('/subscriptions');
    }

    getSubscription(key: string, event: string): FirebaseObjectObservable<any> {
        return this.af.object('/subscriptions/' + event + '/' + key);
    }

    getSubscriptionsEventLogins(event: string): FirebaseListObservable<any> {
        return this.af.list('/subscriptions/' + event);
    }

    removeSubscriptionsEventLogin(loginKey: string, eventKey: string): void {
        this.af.list('/subscriptions/' + eventKey).remove(loginKey).catch(error => {
            console.log(error);
        });
    }

}
