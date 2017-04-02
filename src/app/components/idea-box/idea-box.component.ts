import { Component, OnInit } from '@angular/core';

import { MdSnackBar } from '@angular/material';

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
        private contactService: ContactService,
        public snackBar: MdSnackBar
    ) { }

    ngOnInit() {
    }

    onSubmit(event): void {
        event.preventDefault();
        this.contactService.sendContactForm(this.contact);
        this.contact = {
            email: '',
            subject: '',
            message: '',
        };
        this.openSnackBar('Merci pour ton message ! On te recontacte vite !', 'FERMER')
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };
}
