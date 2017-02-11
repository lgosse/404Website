import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:       '',
    redirectTo: '/home',
    pathMatch:  'full'
  },
  {
    path:       'team',
    component:  TeamComponent
  },
  {
    path:       'home',
    component:  HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
