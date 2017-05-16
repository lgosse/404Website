import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import * as Firebase from 'firebase';

import { environment } from 'environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string = 'T_ERROR 404';
    admin: boolean = false;
    loggued: boolean = false;
    intraRedirectUrl: string = environment.intraRedirectUrl;
    params: any;

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar
    ) {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => {
                this.params = params
                if (this.params.code) {
                    console.log(this.params.code);
                }
            })
        Firebase.auth(Firebase.app()).onAuthStateChanged((user) => {
            if (user) {
                this.loggued = true;
                if (user.email === 'bde42.l404@gmail.com') {
                    this.admin = true;
                } else {
                    this.admin = false;
                }
            } else {
                this.admin = false;
                this.loggued = false;
            }
        });
    };

    logout(): void {
        Firebase.auth(Firebase.app()).signOut()
            .catch((err) => {
                this.openSnackBar('Une erreur est survenue, veuillez réessayer ultérieurement', 'FERMER');
            })
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
}
