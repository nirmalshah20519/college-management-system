import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultyNavComponent } from './faculty-nav/faculty-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseManagementFacultyComponent } from './course-management-faculty/course-management-faculty.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ExamsComponent } from './exams/exams.component';
import { FacultyLandingComponent } from './faculty-landing/faculty-landing.component';
import { FullnamePipe } from './Pipes/fullname.pipe';
import { CoursenamePipe } from './Pipes/coursename.pipe';
import { FacultynamePipe } from './Pipes/facultyname.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';
import { ScoreComponent } from './score/score.component';
import { StudentnamePipe } from './Pipes/studentname.pipe';


@NgModule({
  declarations: [
    FacultyHomeComponent,
    FacultyNavComponent,
    HomePageComponent,
    CourseManagementFacultyComponent,
    LecturesComponent,
    ExamsComponent,
    FacultyLandingComponent,
    FullnamePipe,
    CoursenamePipe,
    FacultynamePipe,
    AttendanceComponent,
    ScoreComponent,
    StudentnamePipe
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FacultyModule { }
