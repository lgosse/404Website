import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material'; 

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent {

    constructor(
        private dialogRef: MdDialogRef<OrderDialogComponent>
    ) { }

    public cancelOrder(): void {
        this.dialogRef.close(null);
    }

    public validateOrder(): void {
        this.dialogRef.close('validate order')
    }

}
