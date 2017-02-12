import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { FamiliesComponent } from './components/families/families.component';
import { EventsComponent } from './components/events/events.component';
import { PartnersComponent } from './components/partners/partners.component';

const routes: Routes = [
  {
    path:       '',
    redirectTo: 'home',
    pathMatch:  'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
