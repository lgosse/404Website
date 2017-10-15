import { Component } from "@angular/core";

import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-order-dialog",
  templateUrl: "./order-dialog.component.html",
  styleUrls: ["./order-dialog.component.scss"]
})
export class OrderDialogComponent {
  constructor(private dialogRef: MatDialogRef<OrderDialogComponent>) {}

  public cancelOrder(): void {
    this.dialogRef.close(null);
  }

  public validateOrder(): void {
    this.dialogRef.close("validate order");
  }
}
