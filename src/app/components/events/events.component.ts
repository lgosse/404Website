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

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [EventsService],
  animations: [
    trigger('eventsLoadedState', [
        state('loaded', style({
            transform: 'translateY(0)'
        })),
        state('loading', style({
            transform: 'translateY(3000px)'
        })),
        transition('loading => loaded', [
            animate(300, keyframes([
                style({transform: 'translateY(900px)', offset: 0}),
                style({transform: 'translateY(-15px)', offset: 0.7}),
                style({transform: 'translateY(0)', offset: 1.0})
            ]))
        ])
    ])
  ]
})

export class EventsComponent implements OnInit {

    events: FirebaseListObservable<any>;
    width: number;
    height: number;
    loading: boolean = true;
    eventsLoadedState: string = 'loading';

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
                this.eventsLoadedState = 'loaded';
            })
    }

}
