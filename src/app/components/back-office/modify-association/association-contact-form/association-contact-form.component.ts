import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-association-contact-form",
  templateUrl: "./association-contact-form.component.html",
  styleUrls: ["./association-contact-form.component.scss"]
})
export class AssociationContactFormComponent implements OnInit {
  @Input("group") contactGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
