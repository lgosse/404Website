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

    userInfos: any;

    contact: ContactForm = {
        subject: '',
        message: '',
    };

    constructor(
        public dialogRef: MdDialogRef<DialogContactComponent>,
        private contactService: ContactService,
        public snackBar: MdSnackBar
    ) { }

    ngOnInit() {
        let tErrorSession = window.localStorage.getItem('t_error_session');
        
        if (tErrorSession) {
            this.userInfos = JSON.parse(tErrorSession);
        } else {
            this.userInfos = null;
        }
    }

    close(): void {
        this.dialogRef.close(null);
    }

    onSubmit(event): void {
        event.preventDefault();

        if (this.userInfos === null) {
            this.openSnackBar('Connecte toi pour envoyer ton message !', 'FERMER');

            return ;
        }

        if (this.contact.subject.trim() === '' ||
            this.contact.message.trim() === '') {
            this.openSnackBar('Tout les champs doivent être renseignés.', 'FERMER');

            return ;
        }

        let form = {
            email: this.userInfos.email,
            subject: this.contact.subject,
            message: this.contact.message
        }

        this.contactService.sendContactForm(form);
        this.contact = {
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
