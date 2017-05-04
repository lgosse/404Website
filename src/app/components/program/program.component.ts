import {
    Component,
    OnInit,
    NgZone,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

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
                transform: 'translateY(3000px)'
            })),
            transition('loading => loaded', [
                animate(300, keyframes([
                    style({transform: 'translateY(900px)', offset: 0}),
                    style({transform: 'translateY(-15px)', offset: 0.7}),
                    style({transform: 'translateY(0)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class ProgramComponent implements OnInit {

    program: FirebaseListObservable<any>;
    width: number;
    height: number;
    nbCols: number = 2;
    loading: boolean = true;
    programLoadedState: string = 'loading';

    constructor(
        private ngZone: NgZone,
        private programService: ProgramService
    ) {
        window.onresize = (e) => {
            ngZone.run(() => {
                this.updateGridLayout();
            })
        }
    }

    sortByDate(firstCommitment: Commitment, secondCommitment: Commitment): number {
        if (firstCommitment.date > secondCommitment.date) {
            return 1;
        } else {
            return -1;
        }
    }

    updateGridLayout(): void {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width <= 500) {
            this.nbCols = 1;
        } else {
            this.nbCols = 2;
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
