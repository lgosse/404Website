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

import { Deal } from "app/models/deal";
import { DealsService } from "app/views/deals/services/deals.service";
import { LoadedAnimation } from "app/animations/loaded-animation";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.component.html",
  styleUrls: ["./deals.component.scss"],
  providers: [DealsService],
  animations: [LoadedAnimation]
})
export class DealsComponent implements OnInit {
  public deals: Deal[];
  public width: number;
  public loading: boolean = true;
  public loadedState: string = "loading";

  constructor(private ngZone: NgZone, private dealsService: DealsService) {}

  ngOnInit() {
    this.dealsService.getList().subscribe(deals => {
      this.deals = deals;
      this.loading = false;
      this.loadedState = "loaded";
    });
  }

  public openNewTab(url: string): void {
    var win = window.open(url, "_blank");
    win.focus();
  }
}
