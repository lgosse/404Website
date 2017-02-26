import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProgramService } from 'app/services/program.service';

@Component({
    selector: 'app-commitment-card',
    templateUrl: './commitment-card.component.html',
    styleUrls: ['./commitment-card.component.scss'],
    providers: [ProgramService]
})
export class CommitmentCardComponent implements OnInit {

    @Input()
    commitment;

    constructor(
        private router: Router,
        private programService: ProgramService
    ) { }

    ngOnInit() {
    }

    edit(): void {
        this.router.navigate(['back-office/commitment', this.commitment.$key]);
    }

    remove(): void {
        this.programService.removeCommitment(this.commitment.$key);
    }

}
