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

import { Partner } from 'app/classes/partner';
import { PartnersService } from 'app/services/partners.service';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss'],
    providers: [ PartnersService ],
    animations: [
        trigger('partnersLoadedState', [
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

export class PartnersComponent implements OnInit {

    partners: FirebaseListObservable<any>
    nbCols: number = 3;
    loading: boolean = true;
    partnersLoadedState: string = 'loading';

    constructor(
        private partnerService: PartnersService
    ) { }

    sortByRank(firstPartner: Partner, secondPartner: Partner): number {
        if (firstPartner.rank > secondPartner.rank) {
            return 1;
        } else {
            return -1;
        }
    }

    ngOnInit() {
        this.partnerService.getPartners()
            .subscribe(partners => {
                this.partners = partners.sort(this.sortByRank);
                this.loading = false;
                this.partnersLoadedState = 'loaded';
            })
    }

}
