import { Component, OnInit } from "@angular/core";

import { MatSnackBar } from "@angular/material";

import { ContactForm } from "app/classes/contact-form";
import { User } from "app/classes/user";

import { ContactService } from "app/services/contact.service";
import { UserService } from "app/services/shared/user.service";

@Component({
  selector: "app-idea-box",
  templateUrl: "./idea-box.component.html",
  styleUrls: ["./idea-box.component.scss"],
  providers: [ContactService]
})
export class IdeaBoxComponent implements OnInit {
  userInfos: User;

  contact: ContactForm = {
    subject: "",
    message: ""
  };

  constructor(
    private contactService: ContactService,
    public snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.userInfos = user;
    });
  }

  onSubmit(event): void {
    event.preventDefault();

    if (this.userInfos === null) {
      this.openSnackBar("Connecte toi pour envoyer ton message !", "FERMER");

      return;
    }

    if (
      this.contact.subject.trim() === "" ||
      this.contact.message.trim() === ""
    ) {
      this.openSnackBar("Tout les champs doivent être renseignés.", "FERMER");

      return;
    }

    let form = {
      email: this.userInfos.email,
      subject: this.contact.subject,
      message: this.contact.message
    };

    this.contactService.sendContactForm(form);
    this.contact = {
      subject: "",
      message: ""
    };
    this.openSnackBar(
      "Merci pour ton message ! On te recontacte vite !",
      "FERMER"
    );
  }

  warnNotConnected(): void {
    if (window.localStorage.getItem("t_error_session")) {
      return;
    }
    this.openSnackBar("Connecte toi pour nous envoyer un message !", "FERMER");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
