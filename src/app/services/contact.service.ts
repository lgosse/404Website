import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ContactForm } from 'app/classes/contact-form';

@Injectable()
export class ContactService {

    contact: FirebaseListObservable<any>;

    constructor(af: AngularFireDatabase) {
        this.contact = af.list('/contact');
    }

    sendContactForm(contactForm: ContactForm): void {
        this.contact.push(contactForm);
    }

}
