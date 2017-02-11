import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { Member } from 'app/classes/member';
import { TeamService } from 'app/services/team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    providers: [TeamService]
})

export class TeamComponent implements OnInit {

    members: FirebaseListObservable<any>

    constructor(private teamService: TeamService) { }

    ngOnInit() {
      this.teamService.getMembers()
        .subscribe(members => {
          this.members = members
        });
    }

}
