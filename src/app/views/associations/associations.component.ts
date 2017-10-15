import { Component, OnInit } from "@angular/core";
import { AssociationsService } from "app/views/associations/services/associations.service";
import { Association } from "app/models/association";

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
    this.associationsService.getList().subscribe(associations => {
      this.associations = associations.filter(
        association => association.published === true
      );
    });
  }
}
