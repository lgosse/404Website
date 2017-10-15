import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { User } from "app/models/user";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

@Injectable()
export class UserService {
  public userChangeSource = new BehaviorSubject<any>(0);
  public user: Observable<User> = this.userChangeSource.asObservable();
  public userMailsList: FirebaseListObservable<any>;
  public userMails: [any];

  constructor(private af: AngularFireDatabase) {
    if (window.localStorage.getItem("t_error_session")) {
      this.userChangeSource.next(
        JSON.parse(window.localStorage.getItem("t_error_session"))
      );
    } else {
      this.userChangeSource.next({
        isAuthenticated: false,
        firstName: "",
        lastName: "",
        login: "",
        email: ""
      });
    }
  }

  setUserInfos(userInfos: User) {
    this.user.subscribe(user => {
      window.localStorage.setItem("t_error_session", JSON.stringify(user));
    });
    this.userChangeSource.next(userInfos);
  }

  getAdmins(): any {
    return this.af.list("/admins");
  }

  registerUserMail(): void {
    let userInfos: User;
    this.user.subscribe(user => {
      userInfos = user;
      if (!userInfos || userInfos.isAuthenticated === false) {
        return;
      }
      this.userMailsList = this.af.list("/mails/users");
      this.userMailsList.subscribe(userMails => {
        this.userMails = userMails;
        for (let mail of this.userMails) {
          if (userInfos.email === mail.email) {
            return;
          }
        }

        this.userMailsList.push(userInfos);
      });
    });
  }
}
