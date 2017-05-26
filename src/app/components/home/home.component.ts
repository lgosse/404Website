import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

import { EventsService } from 'app/services/events.service';
import { EventBde } from 'app/classes/eventBde';
import { LoadedAnimation } from 'app/constants/loaded-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ EventsService ],
  animations: [ LoadedAnimation ]
})
export class HomeComponent implements OnInit {

    events: FirebaseListObservable<any>;
    eventsToShow: EventBde[] = [];
    loadedState: boolean = false;
    logoLoaded: boolean = false;

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
                this.eventsToShow.push(this.events[0]);
                for (let eventIndex in this.events) {
                    if (this.events[eventIndex].isParty === true) {
                        this.eventsToShow.push(this.events[eventIndex]);
                    }
                }
                this.loadedState = true;
            })
    }

}
