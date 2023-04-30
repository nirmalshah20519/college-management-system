import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentNavComponent } from './student-nav/student-nav.component';
import { StudentLandingComponent } from './student-landing/student-landing.component';
import { DisplayCourseStudentComponent } from './display-course-student/display-course-student.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LecturePageComponent } from './lecture-page/lecture-page.component';
import { ExamPageComponent } from './exam-page/exam-page.component';


@NgModule({
  declarations: [
    StudentHomeComponent,
    StudentNavComponent,
    StudentLandingComponent,
    DisplayCourseStudentComponent,
    HomePageComponent,
    LecturePageComponent,
    ExamPageComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
