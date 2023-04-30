import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from 'src/Models/Lecture';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  currCID!:number;
  constructor(private serv:DataService, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCID=Number(c.get('CID'))
    })
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  get Lec(){
    return this.serv.LectureList.filter(lec=>lec.CID===this.currCID)
  }

  get UpcomingLectures(){
    return this.serv.LectureList.filter(lec=>lec.CID===this.currCID && lec.Schedule>new Date())
  }

  get UpcomingExams(){
    return this.serv.ExamList.filter(ex=>ex.CID===this.currCID && ex.Schedule>new Date())
  }

  get coursename(){
    return this.serv.CourseList.find(c=>c.CID===this.currCID)?.Name
  }

  get AttendancePerc(){
    let LecData:Lecture[]=[];
    let pCount:number=0;
    this.serv.LectureList.forEach(lec=>{
      lec.Attendance.forEach(att=>{
        if(att.SID===this.CurrentUser.ID){
          LecData.push(lec)
          if(att.Status==true){
            pCount++;
          }
        }
      })
    })
    let perc=(pCount/LecData.length)*100;
    console.log(perc);
    return perc
  }

  get AvgMarks(){
    return ""
  }

}
