import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';

import { Commitment } from 'app/classes/program';
import { ProgramService } from 'app/services/program.service';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss'],
    providers: [ProgramService],
    animations: [
        trigger('programLoadedState', [
            state('loaded', style({
                transform: 'translateY(0)'
            })),
            state('loading', style({
                transform: 'translateY(100%)'
            })),
            transition('loading => loaded', [
                animate(300, keyframes([
                    style({transform: 'translateY(30%)', offset: 0}),
                    style({transform: 'translateY(-15px)', offset: 0.7}),
                    style({transform: 'translateY(0)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class ProgramComponent implements OnInit {

    program: FirebaseListObservable<any>;
    nbCols: number = 1;
    loading: boolean = true;
    programLoadedState: string = 'loading';

    constructor(
        private programService: ProgramService
    ) { }

    sortByDate(firstCommitment: Commitment, secondCommitment: Commitment): number {
        if (firstCommitment.date > secondCommitment.date) {
            return 1;
        } else {
            return -1;
        }
    }


    ngOnInit() {
        this.programService.getProgram()
            .subscribe(program => {
                this.program = program.sort(this.sortByDate);
                this.loading = false;
                this.programLoadedState = 'loaded';
            })
    }

}
