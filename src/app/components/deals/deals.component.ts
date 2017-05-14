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

import { Deal } from 'app/classes/deal';
import { DealsService } from 'app/services/deals.service';

@Component({
    selector: 'app-deals',
    templateUrl: './deals.component.html',
    styleUrls: ['./deals.component.scss'],
    providers: [ DealsService ],
    animations: [
        trigger('dealsLoadedState', [
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
export class DealsComponent implements OnInit {

    deals: FirebaseListObservable<Deal[]>;
    width: number;
    loading: boolean = true;
    dealsLoadedState: string = 'loading';

    constructor(
        private ngZone: NgZone,
        private dealsService: DealsService
    ) { }

    ngOnInit() {
        this.dealsService.getDeals()
            .subscribe(deals => {
                this.deals = deals;
                this.loading = false;
                this.dealsLoadedState = 'loaded';
            })
    }

}
