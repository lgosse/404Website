import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeamService {

    members: FirebaseListObservable<any>;

    constructor(af: AngularFire) {
        this.members = af.database.list('/bdeMembers');
    }

    getMembers(): FirebaseListObservable<any> {
        return this.members;
    }

}
