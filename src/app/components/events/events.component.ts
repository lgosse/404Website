import {
    Component,
    OnInit,
    NgZone,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';


import { FirebaseListObservable } from 'angularfire2/database';

import { EventBde } from 'app/classes/eventBde';
import { EventsService } from 'app/services/events.service';
import { LoadedAnimation } from 'app/constants/loaded-animation';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    providers: [ EventsService ],
    animations: [ LoadedAnimation ]
})

export class EventsComponent implements OnInit {

    events: FirebaseListObservable<any>;
    width: number;
    height: number;
    loading: boolean = true;
    loadedState: string = 'loading';

    constructor(
        private ngZone: NgZone,
        private eventsServce: EventsService
    ) { }

    isPassed(date: Date): boolean {
        const now       = new Date();
        const eventDate = new Date(date);

        if (eventDate.getTime() < now.getTime()) {
            return true;
        } else {
            return false;
        }
    }

    sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        const now       = new Date();
        if (new Date(secondEvent.date).getTime() < now.getTime()) {
            return -1;
        }
        if (secondEvent.isParty === true) {
            return 1;
        }
        return (new Date(firstEvent.date).getTime() - new Date(secondEvent.date).getTime());
    }

    ngOnInit() {
        this.eventsServce.getEvents()
            .subscribe(events => {
                this.events = events.sort(this.sortByDate);
                this.loading = false;
                this.loadedState = 'loaded';
            })
    }

}
