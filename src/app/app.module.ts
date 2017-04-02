import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';
import * as Firebase from 'firebase';

import { AppRoutingModule } from 'app/app-routing.module';

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

export const firebaseConfig = {
  apiKey: 'AIzaSyCcDclzNAmd5NrIK0w1mXrTKg6ABzMsDMQ',
  authDomain: 'website-d0a07.firebaseapp.com',
  databaseURL: 'https://website-d0a07.firebaseio.com',
  storageBucket: 'website-d0a07.appspot.com',
  messagingSenderId: '10707548851'
};

Firebase.initializeApp(firebaseConfig);

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      DialogContactComponent
  ]
})
export class AppModule { }
