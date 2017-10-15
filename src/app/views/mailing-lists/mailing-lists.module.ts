import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { MailingListsComponent } from "app/views/mailing-lists/mailing-lists.component";
import { MailingListComponent } from "app/views/mailing-lists/mailing-list/mailing-list.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [MailingListComponent, MailingListsComponent]
})
export class MailingListsModule {}
