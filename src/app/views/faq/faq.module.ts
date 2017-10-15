import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { FaqComponent } from "app/views/faq/faq.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [FaqComponent]
})
export class FaqModule {}
