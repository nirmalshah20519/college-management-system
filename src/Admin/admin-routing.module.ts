import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CourseCRUDComponent } from './course-crud/course-crud.component';

const routes: Routes = [
  {
    path:"",
    component:AdminHomeComponent,
    children:[
      {
        path:"courses",
        component:CourseCRUDComponent,
      },
      {
        path:':CID',
        component:CourseCRUDComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
