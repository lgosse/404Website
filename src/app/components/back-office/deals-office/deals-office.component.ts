import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Deal } from 'app/classes/deal'; 
import { DealsService } from 'app/services/deals.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-deals-office',
  templateUrl: './deals-office.component.html',
  styleUrls: ['./deals-office.component.scss'],
  providers: [ DealsService ]
})
export class DealsOfficeComponent implements OnInit {

    deals: FirebaseListObservable<Deal[]>;

    constructor(
        private dealsService: DealsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.dealsService.getDeals()
            .subscribe(deals => {
                this.deals = deals;
            })
    }

    newDeal() {
        this.router.navigate(['back-office/new-deal']);
    }

}