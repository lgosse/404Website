import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ContactForm } from 'app/classes/contact-form';

import { ContactService } from 'app/services/contact.service';

@Component({
    selector: 'app-dialog-contact',
    templateUrl: './dialog-contact.component.html',
    styleUrls: ['./dialog-contact.component.scss'],
    providers: [ContactService]
})
export class DialogContactComponent implements OnInit {

    contact: ContactForm = {
        email: '',
        subject: '',
        message: '',
    };

    constructor(
        public dialogRef: MdDialogRef<DialogContactComponent>,
        private contactService: ContactService
    ) { }

    ngOnInit() {
    }

    close(): void {
        this.dialogRef.close();
    }

    onSubmit(event): void {
        event.preventDefault();
        this.contactService.sendContactForm(this.contact);
        this.dialogRef.close();
    }

}
