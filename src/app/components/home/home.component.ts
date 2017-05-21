import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

import { EventsService } from 'app/services/events.service';
import { EventBde } from 'app/classes/eventBde';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ EventsService ]
})
export class HomeComponent implements OnInit {

    events: FirebaseListObservable<any>;
    event: EventBde;
    eventLoaded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private eventsService: EventsService,
        private router: Router
    ) { }


    sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        let actDate = new Date();

        if (new Date(firstEvent.date) > new Date(secondEvent.date) && actDate < new Date(secondEvent.date)) {
            return 1;
        } else {
            return -1;
        }
    }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe(events => {
                this.events = events.sort(this.sortByDate);
                this.event = this.events[0];
                this.eventLoaded = true;
            })
    }

}
