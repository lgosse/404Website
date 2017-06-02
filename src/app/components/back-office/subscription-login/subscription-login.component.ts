import { Component, OnInit, Input } from '@angular/core';

import { FirebaseObjectObservable } from 'angularfire2/database';

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
    loginObservable: FirebaseObjectObservable<any>;

    constructor(
        private subscriptionService : SubscriptionService
    ) { }

    ngOnInit() {
        this.loginObservable = this.subscriptionService.getSubscription(this.login.$key, this.event)
    }

    deleteSubscription(): void {
        let login: any;
        if(this.login.$value) {
            login = {
                login: this.login.$value,
                archived: true
            }
        } else {
            login = {
                login: this.login.login,
                archived: true
            }            
        }
        this.loginObservable.update(login)
    }

    rollbackSubscription(): void {
        const login = {
            login: this.login.login,
            archived: false
        }
        this.loginObservable.update(login)
    }

}
