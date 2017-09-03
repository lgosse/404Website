import { Component, OnInit, Input } from "@angular/core";

import { Contact } from "app/classes/association";

@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.scss"]
})
export class ContactInfoComponent implements OnInit {
  @Input() public contact: Contact;

  constructor() {}

  ngOnInit() {}
}
