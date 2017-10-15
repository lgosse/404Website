import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { TeamComponent } from "app/views/team/team.component";
import { MemberCardComponent } from "app/views/team/member-card/member-card.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [TeamComponent, MemberCardComponent]
})
export class TeamModule {}
