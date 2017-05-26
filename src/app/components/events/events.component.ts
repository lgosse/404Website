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

    sortByDate(firstEvent: EventBde, secondEvent: EventBde): number {
        if (firstEvent.date > secondEvent.date) {
            return 1;
        } else {
            return -1;
        }
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
