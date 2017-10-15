import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Deal } from "app/models/deal";
import { DealsService } from "app/views/deals/services/deals.service";

import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-deals-office",
  templateUrl: "./deals-office.component.html",
  styleUrls: ["./deals-office.component.scss"],
  providers: [DealsService]
})
export class DealsOfficeComponent implements OnInit {
  public deals: Deal[];

  constructor(private dealsService: DealsService, private router: Router) {}

  ngOnInit() {
    this.dealsService.getList().subscribe(deals => {
      this.deals = deals;
    });
  }

  public newDeal() {
    this.router.navigate(["back-office/new-deal"]);
  }
}
