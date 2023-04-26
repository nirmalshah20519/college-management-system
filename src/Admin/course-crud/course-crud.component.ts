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
      this.Course.reset();
  }

  setCurrSub(subName:string){
    this.serv.currSub=subName
  }
}
