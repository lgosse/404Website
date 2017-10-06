import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import "rxjs/add/operator/switchMap";
import { FirebaseObjectObservable } from "angularfire2/database";

import { AssociationsService } from "app/services/associations.service";
import { Association, Contact } from "app/classes/association";
import { SnacksService } from "app/services/snacks.service";
import { CustomValidatorsService } from "app/services/custom-validators.service";

@Component({
  selector: "app-modify-association",
  templateUrl: "./modify-association.component.html",
  styleUrls: ["./modify-association.component.scss"],
  providers: [AssociationsService, CustomValidatorsService]
})
export class ModifyAssociationComponent implements OnInit {
  private associationRef: FirebaseObjectObservable<Association>;
  public association: Association;
  public associationForm: FormGroup;
  public step: number = 0;
  public descriptionMaxLength: number = 50;

  constructor(
    private associationsService: AssociationsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snacks: SnacksService,
    private customValidators: CustomValidatorsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.associationRef = this.associationsService.getAssociation(
        params["key"]
      );
      this.associationRef.subscribe(association => {
        this.association = association;
        this.createForm();
      });
    });
  }

  private createForm(): void {
    this.associationForm = this.fb.group({
      name: this.association.name,
      description: new FormControl(this.association.description || "", [
        Validators.required,
        Validators.maxLength(this.descriptionMaxLength)
      ]),
      websiteURL: new FormControl(
        this.association.websiteURL,
        this.customValidators.optional([this.customValidators.URLValidator])
      ),
      facebookURL: new FormControl(this.association.facebookURL, [
        Validators.required,
        this.customValidators.URLValidator
      ]),
      firstContact: this.fb.group(
        this.createContact("Président", this.association.firstContact, true)
      ),
      secondContact: this.fb.group(
        this.createContact("Trésorier", this.association.secondContact)
      ),
      thirdContact: this.fb.group(
        this.createContact("Secrétaire", this.association.thirdContact)
      )
    });
  }

  private createContact(
    title: string,
    contact: Contact,
    required: Boolean = false
  ): any {
    let requireValidator = null;

    if (required === true) {
      requireValidator = Validators.required;
    }

    if (contact === undefined) {
      contact = {
        title: title,
        firstName: "",
        lastName: "",
        login: "",
        phone: "",
        email: ""
      };
    }

    return {
      title: new FormControl(title),
      firstName: new FormControl(
        contact.firstName,
        Validators.compose([requireValidator])
      ),
      lastName: new FormControl(
        contact.lastName,
        Validators.compose([requireValidator])
      ),
      login: new FormControl(
        contact.login,
        Validators.compose([requireValidator])
      ),
      phone: new FormControl(contact.phone, [
        this.customValidators.optional([
          Validators.pattern("^(0|\\+33|0033)[1-9][0-9]{8}$")
        ])
      ]),
      email: new FormControl(
        contact.email,
        requireValidator
          ? [requireValidator, Validators.email]
          : this.customValidators.optional([Validators.email])
      )
    };
  }

  public setStep(step: number): void {
    this.step = step;
  }

  public nextStep(): void {
    this.step++;
  }

  public onSubmit(): void {
    if (this.associationForm.valid === false) {
      this.snacks.openSnackBar("Formulaire incomplet ou invalide.");

      return;
    }

    this.association = this.associationForm.getRawValue();
    this.associationRef.update(this.association).then(() => {
      this.snacks.openSnackBar("Changements sauvegardés !");
    });
  }

  public toggleAssociationPublication(): void {
    if (this.associationForm.valid === false) {
      this.snacks.openSnackBar("Formulaire incomplet ou invalide.");

      return;
    }

    this.association.published = !this.association.published;
    this.associationRef.update(this.association).then(() => {
      this.snacks.openSnackBar("Association publiée !");
    });
  }
}
