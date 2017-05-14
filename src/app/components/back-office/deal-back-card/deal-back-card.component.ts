import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DealsService } from 'app/services/deals.service';

@Component({
    selector: 'app-deal-back-card',
    templateUrl: './deal-back-card.component.html',
    styleUrls: ['./deal-back-card.component.scss']
})
export class DealBackCardComponent implements OnInit {

    @Input()
    deal;

    constructor(
        private router: Router,
        private dealsService: DealsService
    ) { }

    ngOnInit() {
    }

    edit(): void {
        this.router.navigate(['back-office/deal', this.deal.$key])
    }

    remove(): void {
        this.dealsService.removeDeal(this.deal.$key);
    }

}
