import { Component, OnInit } from '@angular/core';

import { ContactForm } from 'app/classes/contact-form';

import { ContactService } from 'app/services/contact.service';

@Component({
    selector: 'app-idea-box',
    templateUrl: './idea-box.component.html',
    styleUrls: ['./idea-box.component.scss'],
    providers: [ContactService]
})
export class IdeaBoxComponent implements OnInit {

    contact: ContactForm = {
        email: '',
        subject: '',
        message: '',
    };

    constructor(
        private contactService: ContactService
    ) { }

    ngOnInit() {
    }

    onSubmit(event): void {
        event.preventDefault();
        this.contactService.sendContactForm(this.contact);
    }

}
