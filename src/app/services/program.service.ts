import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ProgramService {

    program: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
        this.program = af.database.list('/program');
    }

    getProgram(): FirebaseListObservable<any> {
        return this.program;
    }

    getCommitment(key: string): FirebaseObjectObservable<any> {
        return this.af.database.object('/program/' + key);
    }

    removeCommitment(key: string): void {
        this.program.remove(key);
    }

}
