import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { AssociationsService } from "app/services/associations.service";
import { Association } from "app/classes/association";

@Component({
  selector: "app-modify-association",
  templateUrl: "./modify-association.component.html",
  styleUrls: ["./modify-association.component.scss"],
  providers: [AssociationsService]
})
export class ModifyAssociationComponent implements OnInit {
  public association: Association;

  constructor(
    private associationsService: AssociationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.associationsService
        .getAssociation(params["key"])
        .subscribe(association => {
          this.association = association;
          console.log(this.association);
        });
    });
  }
}
