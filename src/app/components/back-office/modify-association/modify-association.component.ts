import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import "rxjs/add/operator/switchMap";

import { AssociationsService } from "app/services/associations.service";
import { Association, Contact } from "app/classes/association";

@Component({
  selector: "app-modify-association",
  templateUrl: "./modify-association.component.html",
  styleUrls: ["./modify-association.component.scss"],
  providers: [AssociationsService]
})
export class ModifyAssociationComponent implements OnInit {
  public association: Association;
  public associationForm: FormGroup;
  public step: number = 0;
  public URLValidator = Validators.pattern(
    "/^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$/"
  );
  public descriptionMaxLength: number = 50;

  constructor(
    private associationsService: AssociationsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.associationsService
        .getAssociation(params["key"])
        .subscribe(association => {
          this.association = association;
          this.createForm();
        });
    });
  }

  private createForm(): void {
    this.associationForm = this.fb.group({
      name: this.association.name,
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(this.descriptionMaxLength)
      ]),
      websiteURL: new FormControl("", [this.URLValidator]),
      facebookURL: new FormControl("", [this.URLValidator]),
      president: this.fb.group(this.createContact("President", true)),
      treasurer: this.fb.group(this.createContact("Trésorier")),
      secretary: this.fb.group(this.createContact("Secrétaire"))
    });
  }

  private createContact(title: String, required: Boolean = false): any {
    if (required) {
      return {
        title: new FormControl(title),
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        login: new FormControl("", [Validators.required]),
        phone: new FormControl("", [
          Validators.pattern("^(0|\\+33|0033)[1-9][0-9]{8}$")
        ]),
        email: new FormControl("", [Validators.required, Validators.email])
      };
    } else {
      return {
        title: new FormControl(title),
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        login: new FormControl(""),
        phone: new FormControl("", [
          Validators.pattern("^(0|\\+33|0033)[1-9][0-9]{8}$")
        ]),
        email: new FormControl("", [Validators.email])
      };
    }
  }

  public setStep(step: number): void {
    this.step = step;
  }

  public nextStep(): void {
    this.step++;
  }

  public onSubmit(): void {
    console.log(this.associationForm);
  }
}
