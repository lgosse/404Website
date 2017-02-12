import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PartnersService {

    partners: FirebaseListObservable<any>;

    constructor(af: AngularFire) {
        this.partners = af.database.list('/partners');
    }

    getPartners(): FirebaseListObservable<any> {
        return this.partners;
    }

}
