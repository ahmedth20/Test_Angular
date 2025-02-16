import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantsComponent } from 'src/app/components/participants/participants.component';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,

  ]
})
export class ParticipantModule { }
