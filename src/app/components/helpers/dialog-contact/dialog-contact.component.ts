import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";

import { ContactForm } from "app/models/contact-form";
import { User } from "app/models/user";

import { MessagesService } from "app/views/idea-box/services/messages.service";
import { UserService } from "app/services/shared/user.service";

@Component({
  selector: "app-dialog-contact",
  templateUrl: "./dialog-contact.component.html",
  styleUrls: ["./dialog-contact.component.scss"],
  providers: [MessagesService]
})
export class DialogContactComponent implements OnInit {
  userInfos: User;

  contact: ContactForm = {
    subject: "",
    message: ""
  };

  constructor(
    public dialogRef: MatDialogRef<DialogContactComponent>,
    private messagesService: MessagesService,
    public snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.userInfos = user;
    });
  }

  close(): void {
    this.dialogRef.close(null);
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

    this.messagesService.addItem(form);
    this.contact = {
      subject: "",
      message: ""
    };
    this.openSnackBar(
      "Merci pour ton message ! On te recontacte vite !",
      "FERMER"
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
