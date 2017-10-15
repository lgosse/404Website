import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TeamComponent } from "app/views/team/team.component";
import { HomeComponent } from "app/views//home/home.component";
import { EventsComponent } from "app/views/events/events.component";
import { PartnersComponent } from "app/views/partners/partners.component";
import { LoginComponent } from "app/views/login/login.component";
import { DealsComponent } from "app/views/deals/deals.component";
import { FaqComponent } from "app/views/faq/faq.component";
import { ShopComponent } from "app/views/shop/shop.component";
import { IdeaBoxComponent } from "app/views/idea-box/idea-box.component";
import { VideosComponent } from "app/views/videos/videos.component";
import { AssociationsComponent } from "app/views/associations/associations.component";

import { BackOfficeComponent } from "app/views/back-office/back-office.component";
import { MessagesComponent } from "app/views/idea-box/back-office/messages/messages.component";
import { AssociationFormComponent } from "app/views/associations/back-office/association-form/association-form.component";

import { EventsOfficeComponent } from "app/views/events/back-office/events-office/events-office.component";
import { EventFormComponent } from "app/views/events/back-office/event-form/event-form.component";
import { NewEventFormComponent } from "app/views/events/back-office/new-event-form/new-event-form.component";

import { SubscriptionsOfficeComponent } from "app/views/events/back-office/subscriptions-office/subscriptions-office.component";

import { DealsOfficeComponent } from "app/views/deals/back-office/deals-office/deals-office.component";
import { NewDealFormComponent } from "app/views/deals/back-office/new-deal-form/new-deal-form.component";
import { DealFormComponent } from "app/views/deals/back-office/deal-form/deal-form.component";

import { MailingListsComponent } from "app/views/mailing-lists/mailing-lists.component";

import { MailingInterfaceComponent } from "app/views/mailing-interface/mailing-interface.component";

import { ModifyAssociationComponent } from "app/views/associations/back-office/modify-association/modify-association.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "team",
        component: TeamComponent
      },
      {
        path: "idea",
        component: IdeaBoxComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "home:access_token",
        component: HomeComponent
      },
      {
        path: "events",
        component: EventsComponent
      },
      {
        path: "videos",
        component: VideosComponent
      },
      {
        path: "partners",
        component: PartnersComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "shop",
        component: ShopComponent
      },
      {
        path: "faq",
        component: FaqComponent
      },
      {
        path: "deals",
        component: DealsComponent
      },
      {
        path: "associations",
        component: AssociationsComponent
      },
      {
        path: "association/:key",
        component: ModifyAssociationComponent
      },
      {
        path: "back-office",
        component: BackOfficeComponent,
        children: [
          {
            path: "",
            redirectTo: "/back-office/messages",
            pathMatch: "full"
          },
          {
            path: "messages",
            component: MessagesComponent
          },
          {
            path: "subscriptions",
            component: SubscriptionsOfficeComponent
          },
          {
            path: "events-office",
            component: EventsOfficeComponent
          },
          {
            path: "event/:id",
            component: EventFormComponent
          },
          {
            path: "new-event",
            component: NewEventFormComponent
          },
          {
            path: "deals-office",
            component: DealsOfficeComponent
          },
          {
            path: "deal/:id",
            component: DealFormComponent
          },
          {
            path: "new-deal",
            component: NewDealFormComponent
          },
          {
            path: "mailing-lists",
            component: MailingListsComponent
          },
          {
            path: "mailbox",
            component: MailingInterfaceComponent
          },
          {
            path: "associations",
            component: AssociationFormComponent
          }
        ]
      },
      {
        path: "**",
        redirectTo: "/home"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
