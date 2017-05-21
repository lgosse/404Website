import { Component, OnInit, Input } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { EventBde } from 'app/classes/eventBde';
import { EventSubscribingComponent } from 'app/components/event-subscribing/event-subscribing.component';
import { SubscriptionService } from 'app/services/subscription.service';

@Component({
    selector: 'app-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
    providers: [ SubscriptionService ]
})

export class EventCardComponent implements OnInit {

    cardState: string = 'collapsed';

    @Input()
    event: EventBde;
    @Input()
    small?: boolean = false;
    userInfos: any;
    logins: any;
    sub: boolean = false;
    eventKey: string;
    loginKey: string;

    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public subscriptionService: SubscriptionService
    ) { }

    ngOnInit() {
        this.getUserInfos();
    }

    getUserInfos() {
        let tErrorSession = window.localStorage.getItem('t_error_session');
        
        if (tErrorSession) {
            this.userInfos = JSON.parse(tErrorSession);

            this.subscriptionService.getSubscriptionsEventLogins(this.event.title)
                .subscribe(logins => {
                    this.logins = logins;

                    this.sub = false;
                    for (let loginsIndex in logins) {
                        if (logins[loginsIndex].$value === this.userInfos.login) {
                            this.sub = true;
                            this.eventKey = this.event.title;
                            this.loginKey = logins[loginsIndex].$key;
                        }
                    }
                });
        } else {
            this.userInfos = null;
        }
    }

    showSubscriptionDialog(): void {
        this.getUserInfos();

        if (this.userInfos === null) {
            this.openSnackBar('Connecte toi pour t\'inscrire à cet event !', 'FERMER');

            return ;
        }

        this.subscriptionService.subscribe(this.event.title, this.userInfos.login);

        let dialogRef = this.dialog.open(EventSubscribingComponent);
    }

    unsubscribe(): void {
        this.subscriptionService.removeSubscriptionsEventLogin(this.loginKey, this.eventKey);

        this.openSnackBar('Tu as bien été désinscrit de l\'évènement', 'FERMER');
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    }

    isPassed(date: Date): boolean {
        const now       = new Date();
        const eventDate = new Date(date);

        if (eventDate.getTime() < now.getTime()) {
            return true;
        } else {
            return false;
        }
    }

}
