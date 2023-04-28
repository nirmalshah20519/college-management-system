import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { User } from 'src/Models/User';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-faculty-nav',
  templateUrl: './faculty-nav.component.html',
  styleUrls: ['./faculty-nav.component.css']
})
export class FacultyNavComponent {
  constructor(private serv:DataService, private rt:Router){

  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  handleLogout(){
    this.rt.navigateByUrl('/')
    this.serv.CurrentUser={} as User;
  }

  get CoursesByCurrentFaculty(){
    let CurrFacCourses:Course[]=[];
    let CIDs=this.serv.FacultyList.find(f=>f.FID===this.CurrentUser.ID)?.CoursesTaking;
    if(CIDs){
      CIDs.forEach(cid=>{
        let c=this.serv.CourseList.find(c=>c.CID===cid);
        if(c)
        CurrFacCourses.push(c);
      })
    }
    return CurrFacCourses
  }

}
