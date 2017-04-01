import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class EventsService {

    events: FirebaseListObservable<any>;

    constructor(
      private af: AngularFire
    ) {
        this.events = af.database.list('/events');
    }

    getEvents(): FirebaseListObservable<any> {
        return this.events;
    }

    getEvent(key: string):FirebaseObjectObservable<any> {
        return this.af.database.object('/events/' + key);
    }

    removeEvent(key: string): void {
        this.events.remove(key);
    }

}
