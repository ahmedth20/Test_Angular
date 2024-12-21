import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/showteams', pathMatch: 'full' },

  {
    path: 'AddTeam',
    loadChildren: () =>
      import('./Module/team/team.module')
        .then((m) => m.TeamModule),
  },
  {
    path: 'showteams',
    loadChildren: () =>
      import('./Module/team/team.module')
        .then((m) => m.TeamModule),
  },

  {
    path: 'Showmyteams',
    loadChildren: () =>
      import('./Module/team/team.module')
        .then((m) => m.TeamModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
