import { Component, OnInit, Input } from "@angular/core";

import { Association } from "app/classes/association";

@Component({
  selector: "app-association-card",
  templateUrl: "./association-card.component.html",
  styleUrls: ["./association-card.component.scss"]
})
export class AssociationCardComponent implements OnInit {
  @Input() public association: Partial<Association>;

  constructor() {}

  ngOnInit() {}
}
