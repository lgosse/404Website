import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { EventBde } from 'app/classes/eventBde';
import { EventsService } from 'app/services/events.service';

@Component({
    selector: 'app-new-event-form',
    templateUrl: './new-event-form.component.html',
    styleUrls: ['./new-event-form.component.scss'],
    providers: [EventsService]
})
export class NewEventFormComponent implements OnInit {

    key: string;
    eventObservable: FirebaseListObservable<EventBde>;
    event: EventBde;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private eventsService: EventsService
    ) { }

    ngOnInit() {
        this.event = {
            date: new Date('now'),
            title: '',
            imgUrl: '',
            location: '',
            description: '',
            subscription: false
        }
        this.eventObservable = this.eventsService.getEvents();
    }

    newEvent(): void {
        var newEvent = {
            date: this.event.date,
            title: this.event.title,
            imgUrl: this.event.imgUrl,
            location: this.event.location,
            description: this.event.description,
            subscription: this.event.subscription
        }

        this.eventObservable.push(newEvent);
    }

    onSubmit(event): void {
        event.preventDefault();
        this.newEvent();
        this.router.navigate(['back-office/events-office']);
    }

}
