import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { HelpersModule } from "app/components/helpers/helpers.module";

/* Website Components */
import { EventsComponent } from "app/views/events/events.component";
import { PartyCardComponent } from "app/views/events/party-card/party-card.component";
import { EventSubscribingComponent } from "app/views/events/event-subscribing/event-subscribing.component";

/* Back-Office Components */
import { EventBackCardComponent } from "app/views/events/back-office/event-back-card/event-back-card.component";
import { EventFormComponent } from "app/views/events/back-office/event-form/event-form.component";
import { EventSubscriptionComponent } from "app/views/events/back-office/event-subscription/event-subscription.component";
import { NewEventFormComponent } from "app/views/events/back-office/new-event-form/new-event-form.component";
import { EventsOfficeComponent } from "app/views/events/back-office/events-office/events-office.component";
import { SubscriptionLoginComponent } from "app/views/events/back-office/subscription-login/subscription-login.component";
import { SubscriptionsOfficeComponent } from "app/views/events/back-office/subscriptions-office/subscriptions-office.component";

@NgModule({
  imports: [CommonModule, BaseModule, HelpersModule],
  declarations: [
    EventsComponent,
    PartyCardComponent,
    EventSubscribingComponent,
    EventBackCardComponent,
    EventFormComponent,
    EventSubscriptionComponent,
    NewEventFormComponent,
    EventsOfficeComponent,
    SubscriptionLoginComponent,
    SubscriptionsOfficeComponent
  ],
  entryComponents: [EventSubscribingComponent]
})
export class EventsModule {}
