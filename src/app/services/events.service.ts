import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class EventsService {

    events: FirebaseListObservable<any>;

    constructor(
      private af: AngularFireDatabase
    ) {
        this.events = af.list('/events');
    }

    getEvents(): FirebaseListObservable<any> {
        return this.events;
    }

    getEvent(key: string):FirebaseObjectObservable<any> {
        return this.af.object('/events/' + key);
    }

    removeEvent(key: string): void {
        this.events.remove(key);
    }

}
