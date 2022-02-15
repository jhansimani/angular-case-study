import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimerComponent } from './timer/timer.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { CountClicksComponent } from './count-clicks/count-clicks.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Route3Component,
    CountDownTimerComponent,
    TimerComponent,
    TimeLogComponent,
    CountClicksComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class Route3Module { }
