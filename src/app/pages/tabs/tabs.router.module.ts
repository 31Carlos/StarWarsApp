import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: '../films/films.module#FilmsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../film-details/film-details.module#FilmDetailsPageModule'
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../people/people.module#PeoplePageModule'
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../planets/planets.module#PlanetsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}