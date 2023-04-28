import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { Faculty } from 'src/Models/Faculty';
import { Student } from 'src/Models/Student';
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
  AvailableFaculty:Faculty[]=[];
  currFaculty!:number;
  
  constructor(private fb:FormBuilder, private rt:ActivatedRoute, private serv:DataService, private route:Router){
    rt.paramMap.subscribe(val=>{
      let cid = val.get('CID');
      if(cid){
        this.currCID=Number(cid);
        this.currCourse=serv.CourseList.find(c=>c.CID===Number(cid))
      }
    })
    this.serv.FacultyList.forEach(f=>{
      if(!this.currCourse?.FacultiesAssigned.includes(f.FID)){
        this.AvailableFaculty.push(f)
      }
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

  DeleteCourse(){
    this.serv.CourseList=this.serv.CourseList.filter(c=>c!==this.currCourse);
    this.route.navigateByUrl('/admin/courses')
  }

  getFacultyByID(id:number){
    return this.serv.FacultyList.find(f=>f.FID===id)
  }

  AddFac(){
    if(this.currCourse?.CID!==undefined){
      console.log(this.currFaculty,this.currCourse?.CID);
      this.serv.AddFac(Number(this.currFaculty),Number(this.currCourse?.CID));      
      this.AvailableFaculty=this.serv.getAvailableFaculty(this.currCourse?.CID)
    }
  }

  getEnrolledStudents(){    
    let EnrolledStudents:Student[]=[];
    this.serv.StudentList.forEach(s=>{
      if(this.currCourse?.CID!==undefined){
        if(s.CoursesEnrolled.includes(this.currCourse?.CID)){
          EnrolledStudents.push(s)
        }      
      }      
    })
    return EnrolledStudents
  }
  getUnenrolledStudents(){
    return this.serv.StudentList.filter(s=>!this.getEnrolledStudents().includes(s))    
  }

  get AssignedFaculty(){
    return this.serv.getAssignedFaculty(this.currCID)
  }

  AddStu(Stu:Student){
    if(this.currCourse?.CID!==undefined){
      this.serv.enrollStudent(Stu,this.currCourse);
    }
  }

}
