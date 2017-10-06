import { Component, OnInit } from "@angular/core";
import { AssociationsService } from "app/services/associations.service";
import { Association } from "app/classes/association";

@Component({
  selector: "app-associations",
  templateUrl: "./associations.component.html",
  styleUrls: ["./associations.component.scss"],
  providers: [AssociationsService]
})
export class AssociationsComponent implements OnInit {
  public associations: Association[];

  constructor(private associationsService: AssociationsService) {}

  ngOnInit() {
    this.associationsService.getAssociations().subscribe(associations => {
      this.associations = associations.filter(
        association => association.published === true
      );
    });
  }
}
