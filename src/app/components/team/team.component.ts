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

import { Member } from 'app/classes/member';
import { TeamService } from 'app/services/team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    providers: [TeamService],
    animations: [
        trigger('teamLoadedState', [
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

export class TeamComponent implements OnInit {

    members: FirebaseListObservable<any>
    width: number;
    height: number;
    nbCols: number;
    loading: boolean = true;
    teamLoadedState: string = 'loading';

    constructor(
        private teamService: TeamService,
        ngZone: NgZone
    ) {
        window.onresize = (e) => {
            ngZone.run(() => {
                this.updateGridLayout();
            })
        }
    }

    updateGridLayout(): void {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width <= 729) {
            this.nbCols = 1;
        } else if (this.width <= 1253) {
            this.nbCols = 2;
        } else {
            this.nbCols = 3;
        }
    }

    sortByRank(firstMember: Member, secondMember: Member): number {
        if (firstMember.rank > secondMember.rank) {
            return 1;
        } else {
            return -1;
        }
    }

    ngOnInit() {
        this.teamService.getMembers()
            .subscribe(members => {
                this.members = members.sort(this.sortByRank);
                this.loading = false;
                this.teamLoadedState = 'loaded';
            });
        this.updateGridLayout();
    }

}
