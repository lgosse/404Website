import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from 'app/services/events.service';

@Component({
  selector: 'app-event-back-card',
  templateUrl: './event-back-card.component.html',
  styleUrls: ['./event-back-card.component.scss'],
  providers: [EventsService]
})
export class EventBackCardComponent implements OnInit {

  @Input()
  event;

  constructor(
      private router: Router,
      private eventsService: EventsService
  ) { }

  ngOnInit() {
  }

    edit(): void {
        this.router.navigate(['back-office/event', this.event.$key]);
    }

    remove(): void {
        this.eventsService.removeEvent(this.event.$key);
    }

}
