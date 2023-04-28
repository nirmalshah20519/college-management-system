import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-faculty-landing',
  templateUrl: './faculty-landing.component.html',
  styleUrls: ['./faculty-landing.component.css']
})
export class FacultyLandingComponent {
  currCourse!:number
  constructor(private serv:DataService, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCourse=Number(c.get('CID'))
    })
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  get CoFaculty(){
    let facArr=this.serv.CourseList.find(c=>c.CID===this.currCourse)?.FacultiesAssigned as number[]
    return facArr.filter(f=>f!==this.CurrentUser.ID)
  }

  get Lectures(){
    return this.serv.LectureList.filter(lec=>lec.CID===this.currCourse)
  }

  get Exams(){
    return this.serv.ExamList.filter(exam=>exam.CID===this.currCourse)
  }
}
