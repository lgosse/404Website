import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Deal } from 'app/classes/deal';

@Injectable()
export class DealsService {

    deals: FirebaseListObservable<Deal[]>;

    constructor(
        private af: AngularFireDatabase
    ) { 
        this.deals = af.list('/deals');
    }

    getDeals(): FirebaseListObservable<any> {
        return this.deals;
    }

    getDeal(key: string): FirebaseObjectObservable<any> {
      return this.af.object('/deals/' + key);
    }

    removeDeal(key: string): void {
        this.deals.remove(key);
    }

}
