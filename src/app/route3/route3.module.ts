import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../directives/directives.module';
import { Component4Component } from './component4/component4.component';
import { Component3Component } from './component3/component3.component';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Route3Component,
    Component4Component,
    Component3Component,
    Component2Component,
    Component1Component,
  ],
  imports: [CommonModule, Route3RoutingModule, FormsModule, SharedModule,DirectivesModule],
})
export class Route3Module {}
