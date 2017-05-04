import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { Commitment } from 'app/classes/program';
import { ProgramService } from 'app/services/program.service';

@Component({
  selector: 'app-new-commitment-form',
  templateUrl: './new-commitment-form.component.html',
  styleUrls: ['./new-commitment-form.component.scss'],
  providers: [ProgramService]
})
export class NewCommitmentFormComponent implements OnInit {

    key: string;
    programObservable: FirebaseListObservable<Commitment>;
    commitment: Commitment;

    constructor(
        private route : ActivatedRoute,
        private router: Router,
        private programService : ProgramService
    ) { }

    ngOnInit() {
        this.commitment = {
            date: new Date('now'),
            title: '',
            subtitle: '',
            description: [{
                head: '',
                imgUrl: '',
                body: '',
                foot: ''
            }]
        }
        this.programObservable = this.programService.getProgram();
        
    }

    newCommitment(): void {
        var newCommitment = {
            date: this.commitment.date,
            title: this.commitment.title,
            subtitle: this.commitment.subtitle,
            description: this.commitment.description
        }

        this.programObservable.push(newCommitment);
    }

    onSubmit(event): void {
        event.preventDefault();
        this.newCommitment();
        this.router.navigate(['back-office/program-office'])
    }

}
