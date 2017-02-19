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
