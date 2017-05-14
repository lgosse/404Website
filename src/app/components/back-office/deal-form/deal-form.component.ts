import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Deal } from 'app/classes/deal';
import { DealsService } from 'app/services/deals.service';

@Component({
    selector: 'app-deal-form',
    templateUrl: './deal-form.component.html',
    styleUrls: ['./deal-form.component.scss'],
    providers: [ DealsService ]
})
export class DealFormComponent implements OnInit {

    key: string;
    dealObservable: FirebaseObjectObservable<Deal>;
    deal: Deal;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dealsService: DealsService
    ) { }

    ngOnInit() {
        this.key = this.route.snapshot.params['id'];

        this.dealObservable = this.dealsService.getDeal(this.key);
        this.dealObservable.subscribe(deal => {
            this.deal = deal;
        })
    }

    update(): void {
        var update = {
            title: this.deal.title,
            url: this.deal.url,
            imgUrl: this.deal.imgUrl,
            description: this.deal.description,
            partner: this.deal.partner
        }

        this.dealObservable.update(update);
    }

    onSubmit(deal): void {
        event.preventDefault();
        this.update();
        this.router.navigate(['back-office/deals-office']);
    }

}
