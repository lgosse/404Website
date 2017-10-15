import { Injectable, Injector } from "@angular/core";
import { Http } from "@angular/http";

import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { User } from "app/models/user";

@Injectable()
export class MailingListsService extends FirebaseWrapperService<User[]> {
  constructor(injector: Injector, private http: Http) {
    super(injector);
    this.firebaseReference = "/mails";
  }

  updateMail(listKey, userKey, user): void {
    this.getSubListItem(listKey, userKey).update(user);
  }

  addMailComplete(listKey, user: User): void {
    this.getSubList(listKey).push(user);
  }

  addMail(listKey, mail): void {
    this.getSubList(listKey).push({
      email: mail,
      firstName: "anon",
      isAuthenticated: true,
      login: "anon",
      lastName: "anon"
    });
  }

  sendMail(subject: string, listMails: string[], mailHtml: string): void {
    this.http
      .post("https://us-central1-website-d0a07.cloudfunctions.net/sendmail", {
        subject: subject,
        bcc: listMails,
        text: mailHtml
      })
      .subscribe(
        res => {},
        error => {
          console.log(error);
        }
      );
  }
}
