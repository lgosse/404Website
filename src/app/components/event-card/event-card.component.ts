import { Component, OnInit, Input } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { EventBde } from 'app/classes/eventBde';
import { User } from 'app/classes/user';

import { EventSubscribingComponent } from 'app/components/event-subscribing/event-subscribing.component';

import { SubscriptionService } from 'app/services/subscription.service';
import { UserService } from 'app/services/shared/user.service';

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
    userInfos: User;
    logins: any;
    sub: boolean = false;
    eventKey: string;
    loginKey: string;
    loaded: boolean = false;

    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public subscriptionService: SubscriptionService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.getUserInfos();
    }

    getUserInfos() {
        this.userService.userChange.subscribe((user) => {
            this.userInfos = user;

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
        })
    }

    showSubscriptionDialog(): void {
        this.getUserInfos();

        if (this.userInfos.isAuthenticated === false) {
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

    generateDates(event: EventBde): string {
        let date = new Date(event.date);
        date.setHours(8);
        let startDate = new Date(date).toISOString().replace(/-|:|\.\d\d\d/g,"");
        date.setHours(20);
        let endDate = new Date(date).toISOString().replace(/-|:|\.\d\d\d/g,"")

        return `${startDate}/${endDate}`;
    }

}
