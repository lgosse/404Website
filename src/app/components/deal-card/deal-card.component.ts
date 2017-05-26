import { Component, OnInit, Input } from '@angular/core';

import { Deal } from 'app/classes/deal';

@Component({
    selector: 'app-deal-card',
    templateUrl: './deal-card.component.html',
    styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {

    loaded: boolean = false;

    @Input()
    deal: Deal;

    constructor() { }

    ngOnInit() {
    }

}
