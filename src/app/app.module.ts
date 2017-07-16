import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Firebase from 'firebase';
import { environment } from 'environments/environment';
import { MarkdownModule } from 'angular2-markdown';

import { AppRoutingModule } from 'app/app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
  
import { AppComponent } from 'app/app.component';
import { TeamComponent } from 'app/components/team/team.component';
import { HomeComponent } from 'app/components/home/home.component';
import { EventsComponent } from 'app/components/events/events.component';
import { FamiliesComponent } from 'app/components/families/families.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogContactComponent } from './components/dialog-contact/dialog-contact.component';
import { LoginComponent } from './components/login/login.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { MessagesComponent } from './components/back-office/messages/messages.component';
import { ProgramOfficeComponent } from './components/back-office/program-office/program-office.component';
import { EventsOfficeComponent } from './components/back-office/events-office/events-office.component';
import { MessageCardComponent } from './components/back-office/message-card/message-card.component';
import { CommitmentFormComponent } from './components/back-office/commitment-form/commitment-form.component';
import { CommitmentCardComponent } from './components/back-office/commitment-card/commitment-card.component';
import { NewCommitmentFormComponent } from './components/back-office/new-commitment-form/new-commitment-form.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventFormComponent } from './components/back-office/event-form/event-form.component';
import { NewEventFormComponent } from './components/back-office/new-event-form/new-event-form.component';
import { EventBackCardComponent } from './components/back-office/event-back-card/event-back-card.component';
import { IdeaBoxComponent } from './components/idea-box/idea-box.component';
import { FaqComponent } from './components/faq/faq.component';
import { EventSubscribingComponent } from './components/event-subscribing/event-subscribing.component';
import { SubscriptionsOfficeComponent } from './components/back-office/subscriptions-office/subscriptions-office.component';
import { EventSubscriptionComponent } from './components/back-office/event-subscription/event-subscription.component';
import { SubscriptionLoginComponent } from './components/back-office/subscription-login/subscription-login.component';
import { DealsComponent } from './components/deals/deals.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';
import { DealsOfficeComponent } from './components/back-office/deals-office/deals-office.component';
import { NewDealFormComponent } from './components/back-office/new-deal-form/new-deal-form.component';
import { DealFormComponent } from './components/back-office/deal-form/deal-form.component';
import { DealBackCardComponent } from './components/back-office/deal-back-card/deal-back-card.component';

import { UserService } from 'app/services/shared/user.service';
import { ShopService } from 'app/services/shop.service';
import { SnacksService } from 'app/services/snacks.service';

import { MailingListsComponent } from './components/back-office/mailing-lists/mailing-lists.component';
import { MailingListComponent } from './components/back-office/mailing-lists/mailing-list/mailing-list.component';
import { MailingInterfaceComponent } from './components/back-office/mailing-interface/mailing-interface.component';
import { MailingAddressBarComponent } from './components/back-office/mailing-interface/mailing-address-bar/mailing-address-bar.component';
import { MailingTextInterfaceComponent } from './components/back-office/mailing-interface/mailing-text-interface/mailing-text-interface.component';
import { MailingRenderInterfaceComponent } from './components/back-office/mailing-interface/mailing-render-interface/mailing-render-interface.component';
import { ShopComponent } from './components/shop/shop.component';
import { ArticleCardComponent } from './components/shop/article-card/article-card.component';
import { BasketComponent } from './components/shop/basket/basket.component';
import { ArticleAddFormComponent } from './components/shop/article-card/article-add-form/article-add-form.component';
import { OrderDialogComponent } from './components/shop/basket/order-dialog/order-dialog.component';
import { OrdersComponent } from './components/shop/orders/orders.component';

Firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    EventsComponent,
    FamiliesComponent,
    MemberCardComponent,
    PartnersComponent,
    PartnerCardComponent,
    ProgramComponent,
    ProgramCardComponent,
    FooterComponent,
    DialogContactComponent,
    LoginComponent,
    BackOfficeComponent,
    MessagesComponent,
    ProgramOfficeComponent,
    EventsOfficeComponent,
    MessageCardComponent,
    CommitmentFormComponent,
    CommitmentCardComponent,
    NewCommitmentFormComponent,
    EventCardComponent,
    EventFormComponent,
    NewEventFormComponent,
    EventBackCardComponent,
    IdeaBoxComponent,
    FaqComponent,
    EventSubscribingComponent,
    SubscriptionsOfficeComponent,
    EventSubscriptionComponent,
    SubscriptionLoginComponent,
    DealsComponent,
    DealCardComponent,
    DealsOfficeComponent,
    NewDealFormComponent,
    DealFormComponent,
    DealBackCardComponent,
    MailingListsComponent,
    MailingListComponent,
    MailingInterfaceComponent,
    MailingAddressBarComponent,
    MailingTextInterfaceComponent,
    MailingRenderInterfaceComponent,
    ShopComponent,
    ArticleCardComponent,
    BasketComponent,
    ArticleAddFormComponent,
    OrderDialogComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    UserService,
    ShopService,
    SnacksService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      DialogContactComponent,
      EventSubscribingComponent,
      OrderDialogComponent      
  ]
})
export class AppModule { }
