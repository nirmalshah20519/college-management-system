import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Score } from 'src/Models/Exam';
import { Attendance } from 'src/Models/Lecture';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  currCID!:number;
  currExam!:number;
  attendanceData:any={}
  constructor(private serv:DataService, private rt:ActivatedRoute){
    rt.queryParamMap.subscribe(c=>{
      this.currCID= Number(c.get('CID'))
    })
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  get Exams(){
    return this.serv.ExamList.filter(ex=>ex.CID===this.currCID);
  }

  get Students(){
    return this.serv.ExamList.find(ex=>ex.EID===Number(this.currExam))?.Score
  }

  updateScore(score:Score){
    let index=this.serv.ExamList.findIndex(ex=>ex.EID===this.currExam)
    let scoreList=this.serv.ExamList.find(ex=>ex.EID===this.currExam)?.Score
    let sindex=scoreList?.findIndex(s=>s.SID===score.SID)
    if(scoreList && sindex){
    scoreList[sindex]=score;
    this.serv.ExamList[index].Score=scoreList;
    }
  }
}
