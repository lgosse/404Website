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
        this.contact = {
            email: '',
            subject: '',
            message: '',
        };
        this.openSnackBar('Merci pour ton message ! On te recontacte vite !', 'FERMER')
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
