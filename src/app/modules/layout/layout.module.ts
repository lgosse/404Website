import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { HelpersModule } from "app/components/helpers/helpers.module";

import { LayoutComponent } from "app/modules/layout/layout.component";

@NgModule({
  imports: [CommonModule, BaseModule, HelpersModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
