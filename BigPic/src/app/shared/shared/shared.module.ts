import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { StarComponent } from '../star/star.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
  ],
  declarations: [ StarComponent ],
  exports: [
    StarComponent,
    AngularFontAwesomeModule ]
})
export class SharedModule { }
