import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

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
        private contactService: ContactService,
        public snackBar: MdSnackBar
    ) { }

    ngOnInit() {
    }

    close(): void {
        this.dialogRef.close(null);
    }

    onSubmit(event): void {
        event.preventDefault();
        if (this.validateEmail(this.contact.email) === false) {
            this.openSnackBar('L\'adresse email renseignée est invalide.', 'FERMER');
            return ;
        }        
        if (this.contact.subject.trim() === '' ||
            this.contact.message.trim() === '') {
            this.openSnackBar('Tout les champs doivent être rensignés.', 'FERMER');
            return ;
        }

        this.contactService.sendContactForm(this.contact);
        this.dialogRef.close('Sent !');
    }

    validateEmail(email: string): boolean {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };

}
