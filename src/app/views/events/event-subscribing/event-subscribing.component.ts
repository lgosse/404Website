import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";

@Component({
  selector: "app-event-subscribing",
  templateUrl: "./event-subscribing.component.html",
  styleUrls: ["./event-subscribing.component.scss"]
})
export class EventSubscribingComponent implements OnInit {
  contact: any = {
    login: ""
  };

  constructor(public dialogRef: MatDialogRef<EventSubscribingComponent>) {}

  ngOnInit() {}

  close(): void {
    this.dialogRef.close(null);
  }

  onSubmit(event): void {
    event.preventDefault();

    this.dialogRef.close(null);
  }
}
