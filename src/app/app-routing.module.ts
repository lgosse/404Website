import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { FamiliesComponent } from './components/families/families.component';
import { EventsComponent } from './components/events/events.component';
import { PartnersComponent } from 'app/components/partners/partners.component';
import { ProgramComponent } from 'app/components/program/program.component';
import { LoginComponent } from 'app/components/login/login.component';
import { BackOfficeComponent } from 'app/components/back-office/back-office.component';
import { MessagesComponent } from 'app/components/back-office/messages/messages.component';
import { ProgramOfficeComponent } from 'app/components/back-office/program-office/program-office.component';
import { EventsOfficeComponent } from 'app/components/back-office/events-office/events-office.component';
import { CommitmentFormComponent } from 'app/components/back-office/commitment-form/commitment-form.component';
import { NewCommitmentFormComponent } from 'app/components/back-office/new-commitment-form/new-commitment-form.component';

const routes: Routes = [
{
    path:       '',
    children: [
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        },
        {
            path:       'team',
            component:  TeamComponent
        },
        {
            path:       'home',
            component:  HomeComponent
        },
        {
            path:       'families',
            component:  FamiliesComponent
        },
        {
            path:       'events',
            component:  EventsComponent
        },
        {
            path:       'partners',
            component:  PartnersComponent
        },
        {
            path:       'program',
            component:  ProgramComponent
        },
        {
            path:       'login',
            component:  LoginComponent
        },
        {
            path:       'back-office',
            component: BackOfficeComponent,
            children: [
                {
                    path: '',
                    redirectTo: '/back-office/messages',
                    pathMatch: 'full'
                },
                {
                    path: 'messages',
                    component: MessagesComponent
                },
                {
                    path: 'program-office',
                    component: ProgramOfficeComponent
                },
                {
                    path: 'commitment/:id',
                    component: CommitmentFormComponent
                },
                {
                    path: 'new-commitment',
                    component: NewCommitmentFormComponent
                },
                {
                    path: 'events-office',
                    component: EventsOfficeComponent
                }
            ]
        },
        {
            path: '**',
            redirectTo: '/home'
        }
    ]
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
