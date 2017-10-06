import { Injectable } from "@angular/core";

import { MatSnackBar } from "@angular/material";

@Injectable()
export class SnacksService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = "CLOSE") {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
