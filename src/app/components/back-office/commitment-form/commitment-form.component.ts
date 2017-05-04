import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Commitment } from 'app/classes/program';
import { ProgramService } from 'app/services/program.service';

@Component({
  selector: 'app-commitment-form',
  templateUrl: './commitment-form.component.html',
  styleUrls: ['./commitment-form.component.scss'],
  providers: [ProgramService]
})
export class CommitmentFormComponent implements OnInit {

    key: string;
    commitmentObservable: FirebaseObjectObservable<Commitment>;
    commitment: Commitment;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private programService : ProgramService
    ) { }

    ngOnInit() {
        this.key = this.route.snapshot.params['id']

        this.commitmentObservable = this.programService.getCommitment(this.key);
        this.commitmentObservable.subscribe(commitment => {
            this.commitment = commitment;
        })
    }

    update(): void {
        var update = {
            date: this.commitment.date,
            title: this.commitment.title,
            subtitle: this.commitment.subtitle,
            description: this.commitment.description
        }

        this.commitmentObservable.update(update);
    }

    onSubmit(event): void {
        event.preventDefault();
        this.update();
        this.router.navigate(['back-office/program-office']);
    }

}
