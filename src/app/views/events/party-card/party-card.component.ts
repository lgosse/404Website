import { Component, OnInit, Input, HostListener } from "@angular/core";

import { EventBde } from "app/models/eventBde";
import { LayoutService } from "app/services/shared/layout.service";

@Component({
  selector: "app-party-card",
  templateUrl: "./party-card.component.html",
  styleUrls: ["./party-card.component.scss"]
})
export class PartyCardComponent implements OnInit {
  public showLittleCard = true;

  @Input() public party: EventBde;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.handleLayout();
  }

  private handleLayout(): void {
    this.layoutService.layout.subscribe(layout => {
      if (layout === "xs" || layout === "sm") {
        this.showLittleCard = true;
      } else {
        this.showLittleCard = false;
      }
    });
  }

  private redirect(url: string): void {
    var win = window.open(url, "_blank");
    win.focus();
  }
}
