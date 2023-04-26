import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { CourseCRUDComponent } from './course-crud/course-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentCRUDComponent } from './student-crud/student-crud.component';
import { FacultyCRUDComponent } from './faculty-crud/faculty-crud.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminNavComponent,
    CourseCRUDComponent,
    StudentCRUDComponent,
    FacultyCRUDComponent,
    ManageCourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
  
 }
