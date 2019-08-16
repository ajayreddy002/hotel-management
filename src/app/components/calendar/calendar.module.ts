import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionPopComponent } from '../action-pop/action-pop.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ActionPopComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ActionPopComponent
  ]
})
export class CalendarModule { }
