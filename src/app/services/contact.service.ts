import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ContactForm } from 'app/classes/contact-form';

@Injectable()
export class ContactService {

    contact: FirebaseListObservable<any>;

    constructor(af: AngularFire) {
        this.contact = af.database.list('/contact');
    }

    sendContactForm(contactForm: ContactForm): void {
        this.contact.push(contactForm);
    }

}
