import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { BackOfficeComponent } from "app/views/back-office/back-office.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [BackOfficeComponent]
})
export class BackOfficeModule {}
