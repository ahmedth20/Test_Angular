import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from 'src/app/components/team/team.component';
import { TeamsComponent } from 'src/app/components/teams/teams.component';
import { FormTeamComponent } from 'src/app/components/form-team/form-team.component';
import { MyTeamsComponent } from 'src/app/components/my-teams/my-teams.component';


@NgModule({
  declarations: [
   TeamComponent,
   TeamsComponent,
   FormTeamComponent,
   MyTeamsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class TeamModule { }
