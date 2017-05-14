import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import * as Firebase from 'firebase';

import { ConnexionService } from 'app/services/connexion.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [ConnexionService]
})
export class LoginComponent implements OnInit {

    form: any;

    constructor(
        private connexionService: ConnexionService,
        private router: Router,
        private snackBar: MdSnackBar
    ) { }

    ngOnInit() {
        this.form = {};
        Firebase.auth(Firebase.app()).onAuthStateChanged((user) => {
            if (user && user.email === 'bde42.l404@gmail.com') {
                this.router.navigate(['back-office']);
            }
        });
    }

    login(): void {
        this.connexionService.login(this.form.mail, this.form.password)
            .catch(() => {
                this.openSnackBar('BAD CREDENTIALS', 'FERMER');
            });
    }

    onSubmit(event): void {
        event.preventDefault();
        this.login();
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }

}
