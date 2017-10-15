import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssociationsModule } from "app/views/associations/associations.module";
import { DealsModule } from "app/views/deals/deals.module";
import { HomeModule } from "app/views/home/home.module";
import { VideosModule } from "app/views/videos/videos.module";
import { TeamModule } from "app/views/team/team.module";
import { ShopModule } from "app/views/shop/shop.module";
import { PartnersModule } from "app/views/partners/partners.module";
import { EventsModule } from "app/views/events/events.module";
import { IdeaBoxModule } from "app/views/idea-box/idea-box.module";
import { FaqModule } from "app/views/faq/faq.module";
import { LoginModule } from "app/views/login/login.module";
import { BackOfficeModule } from "app/views/back-office/back-office.module";
import { MailingListsModule } from "app/views/mailing-lists/mailing-lists.module";
import { MailingInterfaceModule } from "app/views/mailing-interface/mailing-interface.module";

@NgModule({
  imports: [
    CommonModule,
    AssociationsModule,
    DealsModule,
    HomeModule,
    VideosModule,
    TeamModule,
    ShopModule,
    PartnersModule,
    EventsModule,
    IdeaBoxModule,
    FaqModule,
    LoginModule,
    BackOfficeModule,
    MailingListsModule,
    MailingInterfaceModule
  ],
  exports: [
    AssociationsModule,
    DealsModule,
    HomeModule,
    VideosModule,
    TeamModule,
    ShopModule,
    PartnersModule,
    EventsModule,
    IdeaBoxModule,
    FaqModule,
    LoginModule,
    BackOfficeModule,
    MailingListsModule,
    MailingInterfaceModule
  ],
  declarations: []
})
export class ViewsModule {}
