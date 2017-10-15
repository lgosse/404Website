// Angular core dependencies
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

// Other dependencies
import { MatDialog, MatDialogRef, MatSidenav } from "@angular/material";
import { Observable, Subject } from "rxjs/Rx";
import * as Firebase from "firebase";

// App dependencies
import { DialogContactComponent } from "app/components/helpers/dialog-contact/dialog-contact.component";
import { IntraApiService } from "app/services/intra-api.service";
import { UserService } from "app/services/shared/user.service";
import { SnacksService } from "app/services/snacks.service";
import { LayoutService } from "app/services/shared/layout.service";
import { AssociationsService } from "app/views/associations/services/associations.service";
import { User } from "app/models/user";
import { environment } from "environments/environment";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  providers: [IntraApiService, AssociationsService]
})
export class SidebarComponent implements OnInit {
  public loaded: boolean = false;
  public admin: boolean = false;
  public user: User = null;
  public intraRedirectUrl: string = environment.intraRedirectUrl;
  public params: any;

  @Input() public sidenav: MatSidenav;

  public mainMenus = [
    {
      link: "home",
      name: "ACCUEIL"
    },
    {
      link: "events",
      name: "ÉVÈNEMENTS"
    },
    {
      link: "team",
      name: "L'ÉQUIPE"
    },
    {
      link: "videos",
      name: "VIDÉOS"
    },
    {
      link: "partners",
      name: "PARTENAIRES"
    },
    {
      link: "deals",
      name: "BONS PLANS"
    },
    {
      link: "shop",
      name: "SHOP"
    },
    {
      link: "faq",
      name: "FAQ"
    },
    {
      link: "idea",
      name: "UNE IDÉE ?"
    }
  ];
  private mq: string;
  private backOfficeLink = { link: "back-office", name: "BACK-OFFICE" };
  private associationsLink = { link: "associations", name: "ASSOCIATIONS" };

  constructor(
    public dialog: MatDialog,
    public snacksService: SnacksService,
    private route: ActivatedRoute,
    private router: Router,
    private intraApiService: IntraApiService,
    private userService: UserService,
    private layoutService: LayoutService,
    private associationsService: AssociationsService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    });

    this.login();

    Firebase.auth(Firebase.app()).onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.userService.getAdmins().subscribe(admins => {
          this.admin = false;
          for (let admin of admins) {
            if (firebaseUser.email === admin.$value) {
              this.admin = true;
              if (this.mainMenus.indexOf(this.backOfficeLink) === -1) {
                this.mainMenus.push(this.backOfficeLink);
              }
            }
          }
        });
      } else {
        this.admin = false;
      }
    });

    this.associationsService.getList().subscribe(associations => {
      let publishedAssociations = associations.filter(
        association => association.published === true
      );

      if (
        publishedAssociations.length > 0 &&
        this.mainMenus.indexOf(this.associationsLink) === -1
      ) {
        this.mainMenus.splice(5, 0, this.associationsLink);
      } else {
        this.mainMenus = this.mainMenus.filter(
          link => link.link !== "associations"
        );
      }
    });

    this.layoutService.layout.subscribe(layout => {
      this.mq = layout;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogContactComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== null) {
        this.snacksService.openSnackBar(
          "Merci pour ton message ! On te recontacte vite !",
          "FERMER"
        );
      }
    });
  }

  logoutFromAdmin(): void {
    this.router.navigate(["home"]);
    Firebase.auth(Firebase.app())
      .signOut()
      .catch(err => {
        this.snacksService.openSnackBar(
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

  public closeSidenav(): void {
    if (this.mq === "xs" || this.mq === "sm") {
      this.sidenav.close();
    }
  }

  logout(): void {
    window.localStorage.clear();
    this.user.isAuthenticated = false;
    window.location.href = window.location.pathname;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
