import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/Models/Course';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent {
  currCID!:number;
  currCourse!:Course|undefined;
  NameEditMode:boolean=false;
  DescEditMode:boolean=false;
  constructor(private fb:FormBuilder, private rt:ActivatedRoute, private serv:DataService){
    rt.paramMap.subscribe(val=>{
      let cid = val.get('CID');
      if(cid){
        this.currCID=Number(cid);
        this.currCourse=serv.CourseList.find(c=>c.CID===Number(cid))
      }
      console.log(this.currCID);
    })
  }

  get CurrSub(){
    return this.serv.currSub
  }

  setCurrSub(subName:string|undefined){
    this.serv.currSub=subName
  }

  NameInput!:string|undefined;
  handleNameEdit(name:string|undefined){
    this.NameEditMode=true
    this.NameInput=name
  }
  handleNameCancel(){
    this.NameEditMode=false
  }
  handleNameEditSave(id:number|undefined){
    this.NameEditMode=false
    let temp=this.serv.CourseList.find(c=>c.CID===id);
    let index=this.serv.CourseList.findIndex(c=>c.CID===id);
    if(temp && this.NameInput !== undefined){
      temp.Name=this.NameInput;
      this.serv.CourseList[index]=temp;
      this.NameInput=""
    }
  }

  DescInput!:string|undefined;
  handleDescEdit(desc:string|undefined){
    this.DescEditMode=true
    this.DescInput=desc
  }
  handleDescCancel(){
    this.DescEditMode=false
  }
  handleDescEditSave(id:number|undefined){
    this.DescEditMode=false;
    let temp=this.serv.CourseList.find(c=>c.CID===id);
    let index=this.serv.CourseList.findIndex(c=>c.CID===id);
    if(temp && this.DescInput !== undefined){
      temp.Description=this.DescInput;
      this.serv.CourseList[index]=temp;
      this.NameInput=""
    }
  }

}
