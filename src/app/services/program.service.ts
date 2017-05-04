import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ProgramService {

    program: FirebaseListObservable<any>;

    constructor(private af: AngularFireDatabase) {
        this.program = af.list('/program');
    }

    getProgram(): FirebaseListObservable<any> {
        return this.program;
    }

    getCommitment(key: string): FirebaseObjectObservable<any> {
        return this.af.object('/program/' + key);
    }

    removeCommitment(key: string): void {
        this.program.remove(key);
    }

}
