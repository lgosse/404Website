import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class ConnexionService {

    constructor() {

    }

    login(email: string, password: string): firebase.Promise<any> {
        console.log('ba uesh');
        return firebase.auth(firebase.app()).signInWithEmailAndPassword(email, password);
    }

}
