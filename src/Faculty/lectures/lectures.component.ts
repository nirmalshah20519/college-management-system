import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/Services/data.service';
import { checkdate } from '../Validators/checkdate.validator';
import { Attendance, AttendanceClass, Lecture, LectureClass } from 'src/Models/Lecture';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent {
  currCourse!:number
  Lecture!:FormGroup
  editUpdFlag:boolean=false;
  currEditLec:Lecture|undefined;
  setEditUpdFlag(bool:boolean){
    this.editUpdFlag=bool
  }
  constructor(private serv:DataService, private fb:FormBuilder, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCourse=Number(c.get('CID'))
    })

    this.Lecture=fb.group({
      Topic:['',[Validators.required]],
      Schedule:['',[Validators.required, checkdate.checkdateValidation]]
    })

  }

  get Topic(){
    return this.Lecture.get('Topic')?.value
  }

  get Schedule(){
    return new Date(this.Lecture.get('Schedule')?.value)
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  get Course(){
    return this.serv.CourseList
  }

  get Date(){
    let dt=new Date();
    let str=dt.getFullYear() + '-'
    if(dt.getMonth()+1<10){
      str+='0'+(dt.getMonth()+1)+'-'
    }else{
      str+=(dt.getMonth()+1)+'-'
    }
    if(dt.getDate()<10){
      str+='0'+(dt.getDate())
    }
    else{
      str+=(dt.getDate())
    }
    str+=' 00:00'
    return str
  }

  onSchedule(){
    let students:Attendance[]=[];
    this.serv.CourseList.find(c=>c.CID===this.currCourse)?.EnrolledStudents.forEach(stu=>{
      students.push(new AttendanceClass(stu,false))
    });
    let id=this.serv.LID
    this.serv.scheduleNewLecture(new LectureClass(id, this.currCourse,this.Schedule,this.Topic,students))
    this.Lecture.reset();
    setTimeout(() => {
        (document.getElementById(`btn-${id}`) as HTMLButtonElement).click();     
    }, 50);
    setTimeout(() => {
      (document.getElementById(`btn-${id}`) as HTMLButtonElement).click();     
  }, 450);   
    
  }

  onEditLecture(lec:Lecture){
    this.currEditLec=lec
    this.Lecture.patchValue(lec);
    this.Lecture.get('Schedule')?.setValue(lec.Schedule.toISOString().substring(0, 16))
    this.setEditUpdFlag(true);
  }

  onDeleteLecture(lec:Lecture){
    this.serv.LectureList=this.serv.LectureList.filter(l=>l!==lec)
  }

  onUpdate(){
    if(this.editUpdFlag && this.currEditLec!==undefined){
      let lecIndex:number=this.serv.LectureList.findIndex(lec=>lec===this.currEditLec);
      this.currEditLec.Topic=this.Topic;
      this.currEditLec.Schedule=new Date(this.Schedule);
      this.serv.LectureList[lecIndex]=this.currEditLec;
      this.setEditUpdFlag(false);
      this.Lecture.reset()
    }
  }

  get Lectures(){
    return this.serv.LectureList.filter(lec=>lec.CID===this.currCourse)
  }

}
