import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CourseCRUDComponent } from './course-crud/course-crud.component';
import { StudentCRUDComponent } from './student-crud/student-crud.component';
import { FacultyCRUDComponent } from './faculty-crud/faculty-crud.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:"",
    component:AdminHomeComponent,
    children:[
      {
        path:"home",
        component:HomePageComponent,
      },
      {
        path:"courses",
        component:CourseCRUDComponent,
      },
      {
        path:'students',
        component:StudentCRUDComponent
      },
      {
        path:'faculties',
        component:FacultyCRUDComponent
      },
      {
        path:'courses/:CID',
        component:ManageCourseComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
