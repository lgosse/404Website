import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PartnersService {

    partners: FirebaseListObservable<any>;

    constructor(af: AngularFireDatabase) {
        this.partners = af.list('/partners');
    }

    getPartners(): FirebaseListObservable<any> {
        return this.partners;
    }

}
