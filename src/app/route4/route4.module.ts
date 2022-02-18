import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TimerService } from '../services/timer.service';
import { DirectivesModule } from '../directives/directives.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

@NgModule({
  declarations: [
    Route4Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule,
    SharedModule,
    DirectivesModule,
  ],
  providers: [TimerService],
})
export class Route4Module {}
