import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course, CourseClass } from 'src/Models/Course';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css'],
})
export class CourseCRUDComponent {
  Course!: FormGroup;
  addUpdateFlag:boolean=false;
  setFlag(bool:boolean){
    this.addUpdateFlag=bool
  }
  curr!:number|null

  constructor(
    private serv: DataService,
    private fb: FormBuilder,
    private rtr: Router,
    private rt: ActivatedRoute
  ) {
    this.Course = fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    });
  }

  get courseList() {
    return this.serv.CourseList;
  }

  get Title() {
    return this.Course.get('Name')?.value;
  }

  get Description() {
    return this.Course.get('Description')?.value;
  }

  addCourse() {
      this.serv.addCourse(this.Title, this.Description);
      console.log(this.Title, this.Description);
      this.Course.reset();
  }

  updateCourse(){
    if(this.curr!==null){
      let updatedCourse=new CourseClass(this.curr,this.Title,this.Description)
      let index=this.serv.CourseList.findIndex(c=>c.CID===this.curr)
      if(index!==-1){
        this.serv.CourseList[index]=updatedCourse
    }
    }
    this.curr=null
    this.Course.reset();
    
  }

  handleUpdateCourse(course: Course) {
    this.curr=course.CID
    this.setFlag(true)
    this.Course.patchValue(course)
  }

  handleDelete(course:Course){
    this.serv.CourseList=this.serv.CourseList.filter(c=>c!==course)
  }
}
