import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormatdatePipe } from './formatdate.pipe';

@NgModule({
  declarations: [SortPipe, FormatdatePipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SortPipe, FormatdatePipe],
})
export class SharedModule {}
