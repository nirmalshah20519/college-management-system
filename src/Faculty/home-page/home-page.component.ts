import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private serv:DataService, private rt:Router){

  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }


  getCoursesByCurrentFaculty(){
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
