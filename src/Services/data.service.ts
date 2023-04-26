import { Injectable } from '@angular/core';
import { Course, CourseClass } from 'src/Models/Course';
import { Role } from 'src/Models/Role';
import { User, UserClass } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  UserList:User[]=[];
  CurrentUser!:User;
  CourseList:Course[]=[];
  constructor() {
    this.UserList.push(new UserClass(this.ID, 'admin','admin',Role.Admin));
    this.UserList.push(new UserClass(this.ID, 'faculty','123456',Role.Faculty));
    this.UserList.push(new UserClass(this.ID, 'Student','123456',Role.Student));
   }

   addUser(usrID:string, Passwd:string, Role:number){
    this.UserList.push(new UserClass(this.ID, usrID, Passwd, Role))
   }

   addCourse(name:string, desc:string){
    console.log(this.CID);
    this.CourseList.push(new CourseClass(this.CID, name, desc))
   }

   get ID(){
    return this.UserList.length===0?1:this.UserList[this.UserList.length-1].ID+1;
   }

   get CID(){
    return this.CourseList.length===0?1:this.CourseList[this.CourseList.length-1].CID+1;
   }

   get AllUsers(){
    return this.UserList
   }

   login(id:string, passwd:string){
    let usr=this.AllUsers.find(u=>u.UserID===id)
    if(usr){
      if(usr.Password===passwd){
        this.CurrentUser=usr;
        console.log(this.CurrentUser);
        return true
      }
      else{
        return false
      }
    }else{
      return null
    }
   }

   logout(user:User){
    if(this.CurrentUser===user){
      this.CurrentUser={} as User;
      return true
    }return false
   }

   getRoleByUserID(id:string) : number{
    let usr=this.AllUsers.find(u=>u.UserID===id)
    if(usr){
      return usr.Role
    }
    return 0
   }


}
