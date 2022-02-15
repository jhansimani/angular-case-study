import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { TimeLimitComponent } from './time-limit/time-limit.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { ClicksCountComponent } from './clicks-count/clicks-count.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    Route4Component,
    TimeLimitComponent,
    CountDownTimerComponent,
    TimeLogComponent,
    ClicksCountComponent,
  ],
  imports: [CommonModule, Route4RoutingModule, FormsModule, SharedModule],
})
export class Route4Module {}
