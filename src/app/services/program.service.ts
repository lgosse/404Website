import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProgramService {

    program: FirebaseListObservable<any>;

    constructor(af: AngularFire) {
        this.program = af.database.list('/program');
    }

    getProgram(): FirebaseListObservable<any> {
        return this.program;
    }

}
