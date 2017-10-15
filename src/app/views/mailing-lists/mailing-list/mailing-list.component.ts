import { Component, OnInit, Input } from "@angular/core";

import { MailingListsService } from "app/views/mailing-lists/services/mailing-lists.service";
import { User } from "app/models/user";

@Component({
  selector: "app-mailing-list",
  templateUrl: "./mailing-list.component.html",
  styleUrls: ["./mailing-list.component.scss"]
})
export class MailingListComponent implements OnInit {
  @Input() mailingList;
  opened: boolean = true;

  constructor(private mailingListsService: MailingListsService) {}

  ngOnInit() {}

  keys(list): Array<string> {
    return Object.keys(list);
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
