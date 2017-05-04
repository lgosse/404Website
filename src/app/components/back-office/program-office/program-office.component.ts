import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'app/services/program.service';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-program-office',
    templateUrl: './program-office.component.html',
    styleUrls: ['./program-office.component.scss'],
    providers: [ProgramService]
})
export class ProgramOfficeComponent implements OnInit {

    program: FirebaseListObservable<any>;

    constructor(
        private programService: ProgramService,
        private router: Router
    ) { }

    ngOnInit() {
        this.programService.getProgram()
            .subscribe(program => {
                this.program = program;
            })
    }

    newCommitment() {
        this.router.navigate(['back-office/new-commitment']);
    }

}
