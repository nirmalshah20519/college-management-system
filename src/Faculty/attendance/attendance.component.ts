import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from 'src/Models/Lecture';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  currCID!:number;
  currLecture!:number;
  attendanceData:(boolean|null)[]=[]
  constructor(private serv:DataService, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCID= Number(c.get('CID'))
    })
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  get Lectures(){
    return this.serv.LectureList.filter(l=>l.CID===this.currCID);
  }

  get Students(){
    return this.serv.LectureList.find(lec=>lec.LID===Number(this.currLecture))?.Attendance
  }

  updateAttend(atten:Attendance){
    let index=this.serv.LectureList.findIndex(lec=>lec.LID===this.currLecture)
    let attend=this.serv.LectureList.find(lec=>lec.LID===this.currLecture)?.Attendance
    let aindex=attend?.findIndex(a=>a.SID===atten.SID)
    atten.Status=this.attendanceData[atten.SID]
    if(attend && aindex){
    attend[aindex]=atten;
    this.serv.LectureList[index].Attendance=attend;
    }
  }

}
