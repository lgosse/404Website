import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import * as Firebase from 'firebase';

import { Observable, Subject } from 'rx';

import { IntraApiService } from 'app/services/intra-api.service';

import { environment } from 'environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ IntraApiService ]
})
export class AppComponent implements OnInit {
    title: string = 'T_ERROR 404';
    admin: boolean = false;
    loggued: boolean = false;
    userLogguedIn: boolean = false;
    intraRedirectUrl: string = environment.intraRedirectUrl;
    params: any;

    userInfos: any = { isAuthenticated: false };

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar,
        private intraApiService: IntraApiService
    ) {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    ngOnInit(): void {

        let tErrorSession = window.localStorage.getItem('t_error_session');
        if (tErrorSession) {
            this.userInfos = JSON.parse(tErrorSession);
        } else {
            this.login();
        }

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

    logoutFromAdmin(): void {
        Firebase.auth(Firebase.app()).signOut()
            .catch((err) => {
                this.openSnackBar('Une erreur est survenue, veuillez réessayer ultérieurement', 'FERMER');
            })
    }

    login(): void {
        this.route.queryParams.subscribe(params => {
            if (params.access_token) {
                let accessToken = params.access_token;
                window.localStorage.setItem('access_token', accessToken);

                this.intraApiService.getUserInfo(accessToken)
                    .subscribe(response => {
                        this.userInfos = {
                            isAuthenticated: true,
                            firstName: response.first_name,
                            lastName: response.last_name,
                            login: response.login,
                            email: response.email
                        };
                        window.localStorage.setItem('t_error_session', JSON.stringify(this.userInfos));
                    }, error => {
                        console.log(error);
                    });
            }
        });
    }

    logout(): void {
        window.localStorage.clear();
        this.userInfos.isAuthenticated = false;
        window.location.href = window.location.pathname
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
}
