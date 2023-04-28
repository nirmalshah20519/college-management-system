import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lecture, Attendance, AttendanceClass, LectureClass } from 'src/Models/Lecture';
import { DataService } from 'src/Services/data.service';
import { checkdate } from '../Validators/checkdate.validator';
import { Exam, ExamClass, Score, ScoreClass } from 'src/Models/Exam';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {

  currCourse!:number
  Exam!:FormGroup
  editUpdFlag:boolean=false;
  currEditExam:Exam|undefined;
  setEditUpdFlag(bool:boolean){
    this.editUpdFlag=bool
  }
  constructor(private serv:DataService, private fb:FormBuilder, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCourse=Number(c.get('CID'))
    })

    this.Exam=fb.group({
      Topic:['',[Validators.required]],
      Schedule:['',[Validators.required, checkdate.checkdateValidation]],
      TotalMarks:['',[Validators.required]]
    })

  }

  get Topic(){
    return this.Exam.get('Topic')?.value
  }

  get Schedule(){
    return new Date(this.Exam.get('Schedule')?.value)
  }

  get TotalMarks(){
    return Number(this.Exam.get('TotalMarks')?.value)
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
    let students:Score[]=[];
    this.serv.CourseList.find(c=>c.CID===this.currCourse)?.EnrolledStudents.forEach(stu=>{
      students.push(new ScoreClass(stu,null))
    });
    let id=this.serv.EID
    this.serv.scheduleNewExam(new ExamClass(id, this.currCourse,this.Schedule,this.Topic, this.TotalMarks ,students))
    this.Exam.reset();
  
    
  }

  onEditExam(exam:Exam){
    this.currEditExam=exam
    this.Exam.patchValue(exam);
    this.Exam.get('Schedule')?.setValue(exam.Schedule.toISOString().substring(0, 16))
    this.setEditUpdFlag(true);
  }

  onDeleteExam(exam:Exam){
    this.serv.ExamList=this.serv.ExamList.filter(l=>l!==exam)
  }

  onUpdate(){
    if(this.editUpdFlag && this.currEditExam!==undefined){
      let exIndex:number=this.serv.ExamList.findIndex(ex=>ex===this.currEditExam);
      this.currEditExam.Topic=this.Topic;
      this.currEditExam.Schedule=new Date(this.Schedule);
      this.serv.ExamList[exIndex]=this.currEditExam;
      this.setEditUpdFlag(false);
      this.Exam.reset()
    }
  }

  get Exams(){
    return this.serv.ExamList.filter(exam=>exam.CID===this.currCourse)
  }

}
