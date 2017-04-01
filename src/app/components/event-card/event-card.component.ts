import { Component, OnInit, Input } from '@angular/core';

import { EventBde } from 'app/classes/eventBde';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})

export class EventCardComponent implements OnInit {

    cardState: string = 'collapsed';

    @Input()
    event: EventBde;

    constructor() { }

    ngOnInit() {
    }

}
