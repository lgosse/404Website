import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { HelpersModule } from "app/components/helpers/helpers.module";

import { PartnersComponent } from "app/views/partners/partners.component";

@NgModule({
  imports: [CommonModule, BaseModule, HelpersModule],
  declarations: [PartnersComponent]
})
export class PartnersModule {}
