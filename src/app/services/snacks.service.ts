import { Injectable } from '@angular/core';

import { MdSnackBar } from '@angular/material';

@Injectable()
export class SnacksService {

    constructor(
        private snackBar: MdSnackBar
    ) { }


    openSnackBar(message: string, action: string = 'CLOSE') {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }

}
