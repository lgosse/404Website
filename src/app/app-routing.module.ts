import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TeamComponent } from "./components/team/team.component";
import { HomeComponent } from "./components/home/home.component";
import { FamiliesComponent } from "./components/families/families.component";
import { EventsComponent } from "./components/events/events.component";
import { PartnersComponent } from "app/components/partners/partners.component";
import { ProgramComponent } from "app/components/program/program.component";
import { LoginComponent } from "app/components/login/login.component";
import { DealsComponent } from "app/components/deals/deals.component";
import { FaqComponent } from "app/components/faq/faq.component";
import { ShopComponent } from "app/components/shop/shop.component";
import { IdeaBoxComponent } from "app/components/idea-box/idea-box.component";
import { VideosComponent } from "app/components/videos/videos.component";
import { AssociationsComponent } from "app/components/associations/associations.component";

import { BackOfficeComponent } from "app/components/back-office/back-office.component";
import { MessagesComponent } from "app/components/back-office/messages/messages.component";
import { AssociationFormComponent } from "app/components/back-office/association-form/association-form.component";

import { ProgramOfficeComponent } from "app/components/back-office/program-office/program-office.component";
import { CommitmentFormComponent } from "app/components/back-office/commitment-form/commitment-form.component";
import { NewCommitmentFormComponent } from "app/components/back-office/new-commitment-form/new-commitment-form.component";

import { EventsOfficeComponent } from "app/components/back-office/events-office/events-office.component";
import { EventFormComponent } from "app/components/back-office/event-form/event-form.component";
import { NewEventFormComponent } from "app/components/back-office/new-event-form/new-event-form.component";

import { SubscriptionsOfficeComponent } from "app/components/back-office/subscriptions-office/subscriptions-office.component";

import { DealsOfficeComponent } from "./components/back-office/deals-office/deals-office.component";
import { NewDealFormComponent } from "./components/back-office/new-deal-form/new-deal-form.component";
import { DealFormComponent } from "./components/back-office/deal-form/deal-form.component";

import { MailingListsComponent } from "app/components/back-office/mailing-lists/mailing-lists.component";

import { MailingInterfaceComponent } from "app/components/back-office/mailing-interface/mailing-interface.component";

import { ModifyAssociationComponent } from "app/components/back-office/modify-association/modify-association.component";

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
        path: "families",
        component: FamiliesComponent
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
        path: "program",
        component: ProgramComponent
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
