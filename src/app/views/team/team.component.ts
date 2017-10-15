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
} from "@angular/core";

import { FirebaseListObservable } from "angularfire2/database";

import { Member } from "app/models/member";
import { TeamService } from "app/views/team/services/team.service";
import { LoadedAnimation } from "app/animations/loaded-animation";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
  providers: [TeamService],
  animations: [LoadedAnimation]
})
export class TeamComponent implements OnInit {
  public members: Member[];
  public width: number;
  public height: number;
  public nbCols: number;
  public loading: boolean = true;
  public loadedState: string = "loading";

  constructor(private teamService: TeamService, ngZone: NgZone) {
    window.onresize = e => {
      ngZone.run(() => {
        this.updateGridLayout();
      });
    };
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
    this.teamService.getList().subscribe((members: Partial<Member[]>) => {
      this.members = members.sort(this.sortByRank);
      this.loading = false;
      this.loadedState = "loaded";
    });
    this.updateGridLayout();
  }
}
