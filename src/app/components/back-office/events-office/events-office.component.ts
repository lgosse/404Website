import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/services/events.service';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';

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

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe(events => {
                this.events = events;
            })
    }

    newEvent() {
        this.router.navigate(['back-office/new-event']);
    }

}
