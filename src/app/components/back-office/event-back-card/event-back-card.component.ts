import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from 'app/services/events.service';
import { EventBde } from 'app/classes/eventBde';

import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-event-back-card',
  templateUrl: './event-back-card.component.html',
  styleUrls: ['./event-back-card.component.scss'],
  providers: [EventsService]
})
export class EventBackCardComponent implements OnInit {

    @Input()
    event;
    eventObservable: FirebaseObjectObservable<EventBde>

  constructor(
      private router: Router,
      private eventsService: EventsService
  ) { }

    ngOnInit() {
        this.eventObservable = this.eventsService.getEvent(this.event.$key);
    }

    edit(): void {
        this.router.navigate(['back-office/event', this.event.$key]);
    }

    remove(): void {
        this.event.archived = true;
        this.eventObservable.update(this.event);
    }

    unarchived(): void {
        this.event.archived = false;
        this.eventObservable.update(this.event);
    }

}
