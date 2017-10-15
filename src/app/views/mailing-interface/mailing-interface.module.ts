import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { MarkdownModule } from "angular2-markdown";

import { MailingInterfaceComponent } from "app/views/mailing-interface/mailing-interface.component";
import { MailingAddressBarComponent } from "app/views/mailing-interface/mailing-address-bar/mailing-address-bar.component";
import { MailingRenderInterfaceComponent } from "app/views/mailing-interface/mailing-render-interface/mailing-render-interface.component";
import { MailingTextInterfaceComponent } from "app/views/mailing-interface/mailing-text-interface/mailing-text-interface.component";

@NgModule({
  imports: [CommonModule, BaseModule, MarkdownModule.forRoot()],
  declarations: [
    MailingInterfaceComponent,
    MailingAddressBarComponent,
    MailingRenderInterfaceComponent,
    MailingTextInterfaceComponent
  ]
})
export class MailingInterfaceModule {}
