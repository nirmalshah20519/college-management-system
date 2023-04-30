import { Component } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-student-landing',
  templateUrl: './student-landing.component.html',
  styleUrls: ['./student-landing.component.css']
})
export class StudentLandingComponent {
  currCID!:number;

  constructor( private serv:DataService){
    

  }

  get CurrentUser(){
    return this.serv.CurrentUser;
  }

  get myCourses(){
    let id=this.CurrentUser.ID
    return this.serv.CourseList.filter(c=>c.EnrolledStudents.includes(id))
  }

}
