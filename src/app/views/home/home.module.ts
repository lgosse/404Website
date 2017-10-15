import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { HelpersModule } from "app/components/helpers/helpers.module";

import { HomeComponent } from "app/views/home/home.component";

@NgModule({
  imports: [CommonModule, BaseModule, HelpersModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
