import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, tempStudent } from 'src/Models/Student';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCRUDComponent {
  Student!: FormGroup;
  addUpdateFlag:boolean=false;
  setFlag(bool:boolean){
    this.addUpdateFlag=bool
  }
  curr!:number|null

  constructor(
    private serv: DataService,
    private fb: FormBuilder
  ) {
    this.Student = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Gender: ['', [Validators.required]],
    });
  }

  get studentlist(){
    return this.serv.StudentList
  }

  get firstName(){
    return this.Student.get('firstName')?.value;
  }

  get lastName(){
    return this.Student.get('lastName')?.value;
  }

  get Email(){
    return this.Student.get('Email')?.value;
  }

  get Gender(){
    return this.Student.get('Gender')?.value;
  }

  addStudent(){
    let tempStu:tempStudent={
      Name: this.firstName.trim()+' '+this.lastName.trim(),
      Gender:this.Gender,
      Email:this.Email,
      CoursesEnrolled:[]      
    }
    this.serv.addStudent(tempStu)
    console.log(tempStu);
    this.Student.reset()
  }

  getLoginID(id:number){
    return this.serv.AllUsers.find(u=>u.ID===id)?.UserID
  }

  updateStudent(){
    if(this.curr!==null){
      let updatedStudent:Student|undefined=this.serv.StudentList.find(s=>s.SID===this.curr);
      let index=this.serv.StudentList.findIndex(sI=>sI.SID===this.curr)
      if(updatedStudent){
        updatedStudent.Email=this.Email;
        updatedStudent.Gender=this.Gender;
      }
      if(index!==-1 && updatedStudent!==undefined){
        this.serv.StudentList[index]=updatedStudent
    }
    }
    this.curr=null
    this.Student.reset();
    
  }

  get Usr(){
    return this.serv.AllUsers
  }

  handleUpdateStudent(student:Student){
    this.curr=student.SID;
    this.setFlag(true);
    this.Student.patchValue(student)
    this.Student.get('firstName')?.setValue(student.Name.split(' ')[0])
    this.Student.get('lastName')?.setValue(student.Name.split(' ')[1])
  }

  handleDelete(student:Student){
    this.serv.StudentList=this.serv.StudentList.filter(s=>s.SID!==student.SID);
    this.serv.UserList=this.serv.AllUsers.filter(u=>u.ID!==student.SID)
  }
}
