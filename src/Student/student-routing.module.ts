import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLandingComponent } from './student-landing/student-landing.component';
import { DisplayCourseStudentComponent } from './display-course-student/display-course-student.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LecturePageComponent } from './lecture-page/lecture-page.component';
import { ExamPageComponent } from './exam-page/exam-page.component';

const routes: Routes = [
  {
    path:"",
    component:StudentHomeComponent,
    children:[
      {
        path:"myCourses",
        component:StudentLandingComponent
      },
      {
        path:"myCourses/:CID",
        component:DisplayCourseStudentComponent,
        children:[
          {
            path:"Home",
            component:HomePageComponent
          },
          {
            path:"Lectures",
            component:LecturePageComponent
          },
          {
            path:"Exams",
            component:ExamPageComponent
          }
        ]
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
