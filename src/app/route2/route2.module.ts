import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Route2Component],
  imports: [CommonModule, Route2RoutingModule, FontAwesomeModule, SharedModule],
})
export class Route2Module {}
