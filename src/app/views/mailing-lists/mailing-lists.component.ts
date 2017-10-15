import { Component, OnInit } from "@angular/core";

import { MailingListsService } from "app/views/mailing-lists/services/mailing-lists.service";
import { FirebaseObjectObservable } from "angularfire2/database";

import { User } from "app/models/user";

@Component({
  selector: "app-mailing-lists",
  templateUrl: "./mailing-lists.component.html",
  styleUrls: ["./mailing-lists.component.scss"],
  providers: [MailingListsService]
})
export class MailingListsComponent implements OnInit {
  mailingLists: User[][];
  listTyped: string = "";
  mailTyped: string = "";

  constructor(private mailingListsService: MailingListsService) {}

  ngOnInit() {
    this.mailingListsService.getList().subscribe(mailingLists => {
      this.mailingLists = mailingLists;
    });
  }

  keys(list): Array<string> {
    return Object.keys(list);
  }

  addMail(): void {
    if (this.mailTyped !== "" && this.listTyped !== "") {
      this.mailingListsService.addMail(this.listTyped, this.mailTyped);
      this.mailTyped = "";
    }
  }

  deleteMail(mailingList: string, user: User, userKey: string): void {
    let userUpdate: User = user;
    userUpdate.isAuthenticated = false;
    this.mailingListsService
      .getSubListItem(mailingList, userKey)
      .update(userUpdate);
  }

  rollbackMail(mailingList: string, user: User, userKey: string): void {
    let userUpdate: User = user;
    userUpdate.isAuthenticated = true;
    this.mailingListsService
      .getSubListItem(mailingList, userKey)
      .update(userUpdate);
  }
}
