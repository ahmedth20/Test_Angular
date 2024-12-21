import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from 'src/app/components/form-team/form-team.component';
import { MyTeamsComponent } from 'src/app/components/my-teams/my-teams.component';
import { TeamsComponent } from 'src/app/components/teams/teams.component';

const routes: Routes = [
  {path:'show',component:TeamsComponent},
  {path:'add',component:FormTeamComponent},
  {path:'showteams',component:MyTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
