import { Component, OnInit } from "@angular/core";

import { MatSnackBar } from "@angular/material";

import { User } from "app/models/user";

import { MailingListsService } from "app/views/mailing-lists/services/mailing-lists.service";

@Component({
  selector: "app-mailing-interface",
  templateUrl: "./mailing-interface.component.html",
  styleUrls: ["./mailing-interface.component.scss"],
  providers: [MailingListsService]
})
export class MailingInterfaceComponent implements OnInit {
  mailBody: string = "";
  mails: User[] = [];
  subject: string = "";

  constructor(
    private mailingListsService: MailingListsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  updateMailBody(event: string): void {
    this.mailBody = event;
  }

  updateSelectedMails(event: User[]): void {
    this.mails = event;
  }

  /**
     * Receives the event emitted by MailingInterfacAddressBar to update the subject
     * 
     * @param {string} event 
     * 
     * @memberOf MailingInterfaceComponent
     */
  updateSubject(event: string): void {
    this.subject = event;
  }

  /**
     * Validate email an then send it
     * 
     * @returns {void} 
     * 
     * @memberOf MailingInterfaceComponent
     */
  sendMail(): void {
    let mails: string[] = [];
    let html: string = document.getElementById("markdown").innerHTML;

    for (let mail of this.mails) {
      mails.push(mail.email);
    }

    if (html === "") {
      this.openSnackBar("The mail body cannot be empty", "CLOSE");

      return;
    }

    if (this.subject === "") {
      this.openSnackBar("The mail subject cannot be empty", "CLOSE");

      return;
    }

    if (mails === []) {
      this.openSnackBar("You haven't selected any email address", "CLOSE");

      return;
    }

    this.mailingListsService.sendMail(this.subject, mails, html);
    this.openSnackBar("Email sent !", "CLOSE");

    this.mailBody = "";
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
