import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MdDialog, MdDialogRef } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2/database';

import { EventBde } from 'app/classes/eventBde';
import { User } from 'app/classes/user';
import { EventsService } from 'app/services/events.service';
import { UserService } from 'app/services/shared/user.service';
import { SubscriptionService } from 'app/services/subscription.service';
import { MailingListsService } from 'app/services/mailing-lists.service';
import { SnacksService } from 'app/services/snacks.service';
import { LoadedAnimation } from 'app/constants/loaded-animation';
import { EventSubscribingComponent } from 'app/components/event-subscribing/event-subscribing.component';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    providers: [ EventsService, SubscriptionService, MailingListsService, DatePipe ],
    animations: [ LoadedAnimation ]
})

export class EventsComponent implements OnInit {

    public user          : User = null;
    public events        : FirebaseListObservable<any>;
    public width         : number;
    public height        : number;
    public loading       : boolean = true;
    public loadedState   : string = 'loading';

    public passedEvents  : EventBde[] = [];
    public currentEvents : EventBde[] = [];
    public party         : EventBde = null;
    public subscriptions : any;

    constructor(
        private datePipe            : DatePipe,
        private userService         : UserService,
        private eventsService       : EventsService,
        private mailingListsService : MailingListsService,
        private subscriptionService : SubscriptionService,
        private dialog              : MdDialog,
        private snacksService       : SnacksService
    ) { }

    ngOnInit() {
        this.getEvents();
        this.userService.user.subscribe((user) => {
            this.user = user;
        });
        this.subscriptionService.getSubscriptions().subscribe(subscriptions => {
            this.subscriptions = subscriptions;
        });
    }

    public isPassed(date: Date): boolean {
        const now       = new Date();
        const eventDate = new Date(date);

        if (eventDate.getTime() < now.getTime()) {
            return true;
        } else {
            return false;
        }
    }

    private getEvents(): void {
        this.eventsService.getEvents()
            .subscribe(events => {

                this.passedEvents.length = 0;
                this.currentEvents.length = 0;
                for (let event of events) {

                    event.links = [
                        {
                            name: this.datePipe.transform(event.date),
                            icon: 'event',
                            href: `http://www.google.com/calendar/event?action=TEMPLATE&text=${ event.title }&dates=${ this.generateDates(event) }&details=${ event.description }&location=${ event.location }`
                        },
                        {
                            name: event.location,
                            icon: 'location_on',
                            href: `https://www.google.fr/maps/place/${event.location.replace(' ', '+')}`
                        }
                    ];

                    if (this.isPassed(event.date)) {
                        this.passedEvents.push(event);
                    } else {
                        this.currentEvents.push(event);
                    }
                }

                this.passedEvents  = this.passedEvents.sort(this.sortByDate);
                this.currentEvents = this.currentEvents.sort(this.sortByDate);
                this.loading       = false;
                this.loadedState   = 'loaded';
            })
    }

    private generateDates(event: EventBde): string {
        let date = new Date(event.date);
        date.setHours(8);
        let startDate = new Date(date).toISOString().replace(/-|:|\.\d\d\d/g,"");
        date.setHours(20);
        let endDate = new Date(date).toISOString().replace(/-|:|\.\d\d\d/g,"")

        return `${startDate}/${endDate}`;
    }

    private sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        const now       = new Date();
        let date1 = new Date(firstEvent.date);
        let date2 = new Date(secondEvent.date);

        return (date1.getTime() - date2.getTime());
    }

    isSubbedAtEvent(event: EventBde): boolean {
        if (!this.subscriptions) {
            return false;
        }

        let eventSubs = null;
        for (let sub of this.subscriptions) {
            if (sub.$key === event.title) {
                eventSubs = sub;
            }
        }
        if (!eventSubs) {
            return false;
        }

        for (let subKey of Object.keys(eventSubs)) {
            if (eventSubs[subKey].login &&
                eventSubs[subKey].login === this.user.login &&
                eventSubs[subKey].archived === false && this.user.login != '') {
                return true;
            }

            if (eventSubs[subKey] === this.user.login && this.user.login != '') {
                return true;
            }
        };

        return false;
    };

    public async subscribe(event: EventBde) {
        if (this.user.isAuthenticated === false) {
            this.snacksService.openSnackBar('Connecte toi pour pouvoir t\'inscrire !');
            return ;
        }
        let mailKey = '';
        await this.mailingListsService.getMailingListByName(event.title).subscribe(list => {
            list.map(mail => {
                if (mail.login === this.user.login) {
                    mailKey = mail.$key;
                }
            })
        }).unsubscribe();
        if (mailKey === '') {
            this.mailingListsService.addMailComplete(event.title, this.user);
        } else {
            this.mailingListsService.updateMail(event.title, mailKey, this.user);
        }

        this.subscriptionService.subscribe(event.title, this.user.login);
        let dialogRef = this.dialog.open(EventSubscribingComponent);
    }

    public async unsubscribe(event: EventBde) {
        let mailKey = '';
        await this.mailingListsService.getMailingListByName(event.title).subscribe(list => {
            list.map(mail => {
                if (mail.login === this.user.login) {
                    mailKey = mail.$key;
                }
            })
        }).unsubscribe();
        if (mailKey !== '') {
            this.mailingListsService.updateMail(event.title, mailKey, { isAuthenticated: false });
        }

        let subKey = '';
        await this.subscriptionService.getSubscriptionsEventLogins(event.title).subscribe(list => {
            list.map(user => {
                if (user.$value === this.user.login) {
                    subKey = user.$key;
                }

                if (user.login && user.login === this.user.login) {
                    subKey = user.$key;
                }
            });
        }).unsubscribe();
        if (subKey !== '') {
            this.subscriptionService.removeSubscriptionsEventLogin(subKey, event.title);
            this.snacksService.openSnackBar('Tu as bien été désinscrit de l\'évènement.');
        }
    }

}
