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
        this.getUserInfos();

        this.getEvents();
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

    private sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        const now       = new Date();
        let date1 = new Date(firstEvent.date);
        let date2 = new Date(secondEvent.date);

        return (date1.getTime() - date2.getTime());
    }

    private getUserInfos(): void {
        this.userService.user.subscribe((user) => {
            this.user = user;

            if (!user || !user.isAuthenticated) {
                return ;
            }

            for (let event of this.currentEvents) {
                this.subscriptionService.getSubscriptionsEventLogins(event.title)
                    .subscribe(logins => {

                        for (let login of logins) {
                            if (login.$value === this.user.login) {
                                event.sub      = true;
                            } else {
                                event.sub      = false;
                            }
                        }

                    });
            }
        });
    }

    private getEvents(): void {
        this.eventsService.getEvents()
            .subscribe(events => {

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

    showSubscriptionDialog(event: EventBde): void {

        if (this.user.isAuthenticated === false) {
            this.snacksService.openSnackBar('Connecte toi pour t\'inscrire à cet event !', 'FERMER');

            return ;
        }

        this.mailingListsService.getMailingListByName(event.title).subscribe(list => {
            this.subscriptionService.subscribe(event.title, this.user.login);
            event.sub = true;

            let dialogRef = this.dialog.open(EventSubscribingComponent);

            for (let user of list) {
                if (user.login === this.user.login) {
                    this.mailingListsService.updateMail(event.title, user.$key, {
                        isAuthenticated: true,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        login: user.login,
                        email: user.email
                    })
                    return ;
                }
            };

            this.mailingListsService.addMailComplete(event.title, this.user);
        })
    }

    unsubscribe(event: EventBde): void {
        this.subscriptionService.removeSubscriptionsEventLogin(this.user.login, event.title);

        this.mailingListsService.getMailingListByName(event.title).subscribe(list => {
            for (let user of list) {
                if (user.login === this.user.login) {
                    this.mailingListsService.updateMail(event.title, user.$key, {
                        isAuthenticated: false,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        login: user.login,
                        email: user.email
                    })
                    break ;
                }
            };
        });

        this.snacksService.openSnackBar('Tu as bien été désinscrit de l\'évènement', 'FERMER');
    }


}
