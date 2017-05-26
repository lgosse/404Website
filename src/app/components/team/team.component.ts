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
import { LoadedAnimation } from 'app/constants/loaded-animation';

/**
 * 
 * 
 * @export
 * @class TeamComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    providers: [TeamService],
    animations: [ LoadedAnimation ]
})

export class TeamComponent implements OnInit {

    members: FirebaseListObservable<any>
    width: number;
    height: number;
    nbCols: number;
    loading: boolean = true;
    loadedState: string = 'loading';

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

    /**
     * 
     * 
     * 
     * @memberOf TeamComponent
     */
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

    /**
     * @param {Member} firstMember
     * @param {Member} secondMember
     * @returns {number}
     * 
     * @memberOf TeamComponent
     */
    sortByRank(firstMember: Member, secondMember: Member): number {
        if (firstMember.rank > secondMember.rank) {
            return 1;
        } else {
            return -1;
        }
    }

    /**
     * 
     * 
     * 
     * @memberOf TeamComponent
     */
    ngOnInit() {
        this.teamService.getMembers()
            .subscribe(members => {
                this.members = members.sort(this.sortByRank);
                this.loading = false;
                this.loadedState = 'loaded';
            });
        this.updateGridLayout();
    }

}
