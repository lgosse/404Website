// Angular core dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Other dependencies
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Observable, Subject } from 'rx';
import * as Firebase from 'firebase';

// App dependencies
import { DialogContactComponent } from 'app/components/dialog-contact/dialog-contact.component';
import { IntraApiService } from 'app/services/intra-api.service';
import { UserService } from 'app/services/shared/user.service';
import { SnacksService } from 'app/services/snacks.service';
import { User } from 'app/classes/user';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ IntraApiService ]
})
export class SidebarComponent implements OnInit {

    public admin            : boolean = false;
    public user             : User = null;
    public intraRedirectUrl : string = environment.intraRedirectUrl;
    public params           : any;

    public mainMenus = [
        {
            link: 'home',
            name: 'ACCUEIL'
        },
        {
            link: 'events',
            name: 'ÉVÈNEMENTS'
        },
        {
            link: 'team',
            name: 'L\'ÉQUIPE'
        },
        {
            link: 'partners',
            name: 'PARTNERAIRES'
        },
        {
            link: 'deals',
            name: 'BONS PLANS'
        },
        {
            link: 'shop',
            name: 'SHOP'
        },
        {
            link: 'faq',
            name: 'FAQ'
        }
    ];

    constructor(
        public dialog           : MdDialog,
        public snacksService    : SnacksService,
        private route           : ActivatedRoute,
        private router          : Router,
        private intraApiService : IntraApiService,
        private userService     : UserService
    ) { }

    ngOnInit() {

        this.userService.user.subscribe(user => {
            this.user = user;
        })

        this.login();

        Firebase.auth(Firebase.app()).onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                this.userService.getAdmins().subscribe(admins => {
                    this.admin = false;
                    for (let admin of admins) {
                        if (firebaseUser.email === admin.$value) {
                            this.admin = true;                            
                        }
                    }
                });
            } else {
                this.admin = false;
            }
        });
    
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogContactComponent, {disableClose: true});
        dialogRef.afterClosed().subscribe(result => {
            if (result !== null) {
                this.snacksService.openSnackBar('Merci pour ton message ! On te recontacte vite !', 'FERMER');
            }
        });
    }

    logoutFromAdmin(): void {
        this.router.navigate(['home']);
        Firebase.auth(Firebase.app()).signOut()
            .catch((err) => {
                this.snacksService.openSnackBar('Une erreur est survenue, veuillez réessayer ultérieurement', 'FERMER');
            })
    }

    login(): void {
        this.userService.registerUserMail();

        this.route.queryParams.subscribe(params => {
            if (params.access_token) {
                let accessToken = params.access_token;
                window.localStorage.setItem('access_token', accessToken);

                this.intraApiService.getUserInfo(accessToken)
                    .subscribe(response => {
                        let userInfos = {
                            isAuthenticated: true,
                            firstName: response.first_name,
                            lastName: response.last_name,
                            login: response.login,
                            email: response.email
                        };
                        this.userService.setUserInfos(userInfos);
                    }, error => {
                        console.log(error);
                    });
                
            }
        });
    }

    logout(): void {
        window.localStorage.clear();
        this.user.isAuthenticated = false;
        window.location.href = window.location.pathname;
    }

}
