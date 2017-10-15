import { Component, OnInit } from "@angular/core";

import { FirebaseListObservable } from "angularfire2/database";
import { ActivatedRoute, Router } from "@angular/router";

import { Deal } from "app/models/deal";
import { DealsService } from "app/views/deals/services/deals.service";

@Component({
  selector: "app-new-deal-form",
  templateUrl: "./new-deal-form.component.html",
  styleUrls: ["./new-deal-form.component.scss"],
  providers: [DealsService]
})
export class NewDealFormComponent implements OnInit {
  key: string;
  dealObservable: FirebaseListObservable<Deal[]>;
  deal: Deal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dealsService: DealsService
  ) {}

  ngOnInit() {
    this.deal = {
      title: "",
      imgUrl: "",
      url: "",
      description: "",
      partner: ""
    };
    this.dealObservable = this.dealsService.getList();
  }

  public newdeal(): void {
    var newdeal = {
      title: this.deal.title,
      url: this.deal.url,
      imgUrl: this.deal.imgUrl,
      description: this.deal.description,
      partner: this.deal.partner
    };

    this.dealObservable.push(newdeal);
  }

  public onSubmit(deal): void {
    event.preventDefault();
    this.newdeal();
    this.router.navigate(["back-office/deals-office"]);
  }
}
