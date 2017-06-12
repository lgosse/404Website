import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/services/events.service';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

import { EventBde } from 'app/classes/eventBde';

@Component({
    selector: 'app-events-office',
    templateUrl: './events-office.component.html',
    styleUrls: ['./events-office.component.scss'],
    providers: [EventsService]
})
export class EventsOfficeComponent implements OnInit {

    events: FirebaseListObservable<any>;

    constructor(
        private eventsService: EventsService,
        private router: Router
    ) { }

    sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        const now       = new Date();
        let date1 = new Date(firstEvent.date);
        let date2 = new Date(secondEvent.date);

        if (firstEvent.isParty === true) {
            return -1;
        }
        if (secondEvent.isParty === true) {
            return 1;
        }
        if (date1.getTime() < now.getTime()) {
            if (date2.getTime() < now.getTime()) {
                return (date2.getTime() - date1.getTime());
            } else {
                return 1;
            }
        }
        if (date2.getTime() < now.getTime()) {
            return -1;
        }
        return (date1.getTime() - date2.getTime());
    }

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe(events => {
                this.events = events.sort(this.sortByDate);
            })
    }

    newEvent() {
        this.router.navigate(['back-office/new-event']);
    }

}
