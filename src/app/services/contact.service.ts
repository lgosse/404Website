import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ContactService {

    contact: FirebaseListObservable<any>;

    constructor(af: AngularFireDatabase) {
        this.contact = af.list('/contact');
    }

    sendContactForm(contactForm: any): void {
        this.contact.push(contactForm);
    }

}
