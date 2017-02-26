import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { DialogContactComponent } from 'app/components/dialog-contact/dialog-contact.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    selectedOption: string;
    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar
    ) { }

    ngOnInit() {
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogContactComponent, {disableClose: true});
            dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.openSnackBar('Merci pour ton message ! On te recontacte vite !', 'FERMER');
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }

}