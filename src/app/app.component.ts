import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import * as Firebase from "firebase";

import { Observable, Subject } from "rxjs/Rx";

import { IntraApiService } from "app/services/intra-api.service";
import { UserService } from "app/services/shared/user.service";

import { User } from "app/models/user";

import { environment } from "environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [IntraApiService]
})
export class AppComponent implements OnInit {
  title: string = "T_ERROR 404";
  admin: boolean = false;
  loggued: boolean = false;
  user: User = {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    login: "",
    email: ""
  };
  userLogguedIn: boolean = false;
  intraRedirectUrl: string = environment.intraRedirectUrl;
  params: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private intraApiService: IntraApiService,
    private userService: UserService
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.userService.user.subscribe(user => {
      this.user = user;
    });

    this.login();

    Firebase.auth(Firebase.app()).onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.loggued = true;

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
        this.loggued = false;
      }
    });
  }

  logoutFromAdmin(): void {
    this.router.navigate(["home"]);
    Firebase.auth(Firebase.app())
      .signOut()
      .catch(err => {
        this.openSnackBar(
          "Une erreur est survenue, veuillez réessayer ultérieurement",
          "FERMER"
        );
      });
  }

  login(): void {
    this.userService.registerUserMail();

    this.route.queryParams.subscribe(params => {
      if (params.access_token) {
        let accessToken = params.access_token;
        window.localStorage.setItem("access_token", accessToken);

        this.intraApiService.getUserInfo(accessToken).subscribe(
          response => {
            let userInfos = {
              isAuthenticated: true,
              firstName: response.first_name,
              lastName: response.last_name,
              login: response.login,
              email: response.email
            };
            this.userService.setUserInfos(userInfos);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  logout(): void {
    window.localStorage.clear();
    this.user.isAuthenticated = false;
    window.location.href = window.location.pathname;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
