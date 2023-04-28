import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { CourseManagementFacultyComponent } from './course-management-faculty/course-management-faculty.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ExamsComponent } from './exams/exams.component';
import { FacultyLandingComponent } from './faculty-landing/faculty-landing.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path:"",
    component:FacultyHomeComponent,
    children:[
      {
        path:'courses',
        component:HomePageComponent
      },
      {
        path:'courses/:CID',
        component:CourseManagementFacultyComponent,
        children:[
          {
            path:'landing',
            component:FacultyLandingComponent
          },
          {
            path:'lectures',
            component:LecturesComponent
          },
          {
            path:'attendance',
            component:AttendanceComponent
          },
          {
            path:'exams',
            component:ExamsComponent
          },
          {
            path:'score',
            component:ScoreComponent
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
export class FacultyRoutingModule { }
