import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class ConnexionService {

    constructor() {

    }

    login(email: string, password: string): firebase.Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

}
