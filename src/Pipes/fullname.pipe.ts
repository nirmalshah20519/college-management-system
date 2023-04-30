import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/Models/Course';
import { Faculty, FacultyClass } from 'src/Models/Faculty';
import { Student } from 'src/Models/Student';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  constructor(private serv:DataService){

  }

  transform(value: string): string {
    let obj=this.serv.AllUsers.find(u=>u.UserID===value);
    // let Name:string;
    if(obj){
      let ID=obj.ID;
      let role=obj.Role;
      console.log(role);
      switch(role){
        case 2:return this.serv.FacultyList.find(fac=>fac.FID===ID)?.Name as string;

        case 3:return this.serv.StudentList.find(Stu=>Stu.SID===ID)?.Name as string;

        default:return "Name Not Found"
      }
      
    }
    return "data not found"
        
  }

}
