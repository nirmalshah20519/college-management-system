import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';


@NgModule({
  declarations: [
    FacultyHomeComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule
  ]
})
export class FacultyModule { }
