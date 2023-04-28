import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminGuard } from './admin.guard';
import { FacultyGuard } from './faculty.guard';

const routes: Routes = [
  {
    path:"", 
    component:NavbarComponent
  },
  {
    path:"admin", 
    loadChildren: () => import('../Admin/admin.module').then(a => a.AdminModule),
    canActivate:[AdminGuard]
  },
  {
    path:"faculty", 
    loadChildren: () => import('../Faculty/faculty.module').then(f => f.FacultyModule),
    canActivate:[FacultyGuard]
  },
  {
    path:"student",
    loadChildren: () => import('../Student/student.module').then(s=>s.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
