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

import { Partner } from "app/models/partner";
import { PartnersService } from "app/views/partners/services/partners.service";
import { LoadedAnimation } from "app/animations/loaded-animation";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
  providers: [PartnersService],
  animations: [LoadedAnimation]
})
export class PartnersComponent implements OnInit {
  partners: Partner[];
  nbCols: number = 3;
  loading: boolean = true;
  loadedState: string = "loading";

  constructor(private partnerService: PartnersService) {}

  sortByRank(firstPartner: Partner, secondPartner: Partner): number {
    if (firstPartner.rank > secondPartner.rank) {
      return 1;
    } else {
      return -1;
    }
  }

  ngOnInit() {
    this.partnerService.getList().subscribe(partners => {
      this.partners = partners.sort(this.sortByRank);
      this.loading = false;
      this.loadedState = "loaded";
    });
  }

  public openNewTab(url: string): void {
    var win = window.open(url, "_blank");
    win.focus();
  }
}
