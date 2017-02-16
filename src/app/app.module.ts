import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from 'app/app-routing.module';

import { AppComponent } from 'app/app.component';
import { TeamComponent } from 'app/components/team/team.component';
import { LayoutComponent } from 'app/components/layout/layout.component';
import { HomeComponent } from 'app/components/home/home.component';
import { EventsComponent } from 'app/components/events/events.component';
import { FamiliesComponent } from 'app/components/families/families.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { FooterComponent } from './components/footer/footer.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCcDclzNAmd5NrIK0w1mXrTKg6ABzMsDMQ',
  authDomain: 'website-d0a07.firebaseapp.com',
  databaseURL: 'https://website-d0a07.firebaseio.com',
  storageBucket: 'website-d0a07.appspot.com',
  messagingSenderId: '10707548851'
};

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    LayoutComponent,
    HomeComponent,
    EventsComponent,
    FamiliesComponent,
    MemberCardComponent,
    PartnersComponent,
    PartnerCardComponent,
    ProgramComponent,
    ProgramCardComponent,
    FooterComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
