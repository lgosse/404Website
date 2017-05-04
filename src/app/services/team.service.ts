import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeamService {

    members: FirebaseListObservable<any>;

    constructor(af: AngularFireDatabase) {
        this.members = af.list('/bdeMembers');
    }

    getMembers(): FirebaseListObservable<any> {
        return this.members;
    }

}
