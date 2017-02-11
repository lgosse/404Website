import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Member } from 'app/classes/member';


@Injectable()
export class TeamService {

  members: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.members = af.database.list('/bdeMembers');
    console.log(this.members);
  }

  getMembers(): FirebaseListObservable<any> {
    return this.members;
  }

}
