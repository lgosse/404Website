import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AssociationsService } from "app/views/associations/services/associations.service";
import { Association, AssociationBuilder } from "app/models/association";

@Component({
  selector: "app-association-form",
  templateUrl: "./association-form.component.html",
  styleUrls: ["./association-form.component.scss"],
  providers: [AssociationsService]
})
export class AssociationFormComponent implements OnInit {
  public newAssociation = {
    name: ""
  };
  public associations: Association[];

  constructor(
    private associationsService: AssociationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.associationsService.getList().subscribe(associations => {
      this.associations = associations;
    });
  }

  public createAssociation(): void {
    if (this.newAssociation.name === "") {
      return;
    }
    let association: Association = new AssociationBuilder(
      this.newAssociation.name
    );

    this.associationsService.addItem(association);
  }

  public unpublishAssociation(association: Association): void {
    association.published = !association.published;
    this.associationsService.updateItem(association);
  }

  public removeItem(association: any): void {
    this.associationsService.removeItem(association.$key);
  }

  public redirectToModificationPage(association: any): void {
    window.location.href = `https://bde.42.fr/association/${association.$key}`;
  }
}
