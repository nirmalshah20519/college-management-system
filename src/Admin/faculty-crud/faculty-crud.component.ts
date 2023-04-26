import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Faculty, tempFaculty } from 'src/Models/Faculty';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-faculty-crud',
  templateUrl: './faculty-crud.component.html',
  styleUrls: ['./faculty-crud.component.css']
})
export class FacultyCRUDComponent {
  Faculty!:FormGroup;
  addUpdateFlag:boolean=false;
  setFlag(bool:boolean){
    this.addUpdateFlag=bool
  }
  curr!:number|null

  constructor(
    private serv: DataService,
    private fb: FormBuilder
  ) {
    this.Faculty = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Gender: ['', [Validators.required]],
    });

  }

  get facultylist(){
    return this.serv.FacultyList
  }

  get firstName(){
    return this.Faculty.get('firstName')?.value;
  }

  get lastName(){
    return this.Faculty.get('lastName')?.value;
  }

  get Email(){
    return this.Faculty.get('Email')?.value;
  }

  get Gender(){
    return this.Faculty.get('Gender')?.value;
  }

  addFaculty(){
    let tempFac:tempFaculty={
      Name: this.firstName.trim()+' '+this.lastName.trim(),
      Gender:this.Gender,
      Email:this.Email,
      CoursesTaking:[]      
    }
    this.serv.addFaculty(tempFac)
    console.log(tempFac);
    this.Faculty.reset()
  }

  getLoginID(id:number){
    return this.serv.AllUsers.find(u=>u.ID===id)?.UserID
  }

  updateFaculty(){
    if(this.curr!==null){
      let updatedFaculty:Faculty|undefined=this.serv.FacultyList.find(s=>s.FID===this.curr);
      let index=this.serv.StudentList.findIndex(sI=>sI.SID===this.curr)
      if(updatedFaculty){
        updatedFaculty.Email=this.Email;
        updatedFaculty.Gender=this.Gender;
      }
      if(index!==-1 && updatedFaculty!==undefined){
        this.serv.FacultyList[index]=updatedFaculty
    }
    }
    this.curr=null
    this.Faculty.reset();
    
  }


  handleUpdateFaculty(faculty:Faculty){
    this.curr=faculty.FID;
    this.setFlag(true);
    this.Faculty.patchValue(faculty)
    this.Faculty.get('firstName')?.setValue(faculty.Name.split(' ')[0])
    this.Faculty.get('lastName')?.setValue(faculty.Name.split(' ')[1])
  }

  handleDelete(faculty:Faculty){
    this.serv.FacultyList=this.serv.FacultyList.filter(f=>f.FID!==faculty.FID);
    this.serv.UserList=this.serv.AllUsers.filter(u=>u.ID!==faculty.FID)
  }
}
