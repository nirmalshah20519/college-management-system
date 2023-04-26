import { Injectable } from '@angular/core';
import { Course, CourseClass } from 'src/Models/Course';
import { Faculty, tempFaculty, tempFacultyClass } from 'src/Models/Faculty';
import { Role } from 'src/Models/Role';
import { Student, tempStudent, tempStudentClass } from 'src/Models/Student';
import { User, UserClass } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CurrentUser!:User;
  UserList:User[]=[];
  CourseList:Course[]=[];
  StudentList:Student[]=[];
  FacultyList:Faculty[]=[];
  currSub!:string|undefined;
  setSub(sub:string){
    this.currSub=sub
  }
  setUndef(){
    this.currSub=undefined
  }
  constructor() {
    this.UserList.push(new UserClass(this.ID, 'admin','admin',Role.Admin));
    this.UserList.push(new UserClass(this.ID, 'faculty','123456',Role.Faculty));
    this.UserList.push(new UserClass(this.ID, 'Student','123456',Role.Student));

    this.addCourse('Javascript', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error veritatis perferendis dolorem maiores ipsam magni,');
    this.addCourse('Typescript', ' unde soluta ipsum et consectetur voluptate iusto illum iure nihil voluptates placeat enim cupiditate libero.');

    this.addFaculty(new tempFacultyClass('Nirmal Shah','male','nirmal@gmail.com',[]))
    this.addFaculty(new tempFacultyClass('Vishal Chaudhary','male','vishal@gmail.com',[]))

    this.addStudent(new tempStudentClass('Bradley Bell','male','ive@bafvu.bb',[]))
    this.addStudent(new tempStudentClass('Andre Dennis','male','wudi@juttezsu.cy',[]))
    this.addStudent(new tempStudentClass('Helen Norman','male','fi@vojaru.bs',[]))
    this.addStudent(new tempStudentClass('Seth Waters','male','ukezu@sajekdo.zm',[]))
    this.addStudent(new tempStudentClass('Dustin Farmer','male','pij@wehwertu.al',[]))
   }

   addUser(usrID:string, Passwd:string, Role:number){
    this.UserList.push(new UserClass(this.ID, usrID, Passwd, Role))
   }

   addCourse(name:string, desc:string){
    this.CourseList.push(new CourseClass(this.CID, name, desc, [], []))
   }

   addStudent(studObj:tempStudent){
    let id=this.ID;
    let passwd='123456'
    this.StudentList.push({SID:id,Password:passwd,...studObj});
    let usrID=studObj.Name.split(" ")[0].toLowerCase()+'.'+studObj.Name.split(" ")[1].toLowerCase();
    this.AllUsers.forEach(u=>{
      if(u.UserID===usrID){
        usrID+=String(id)
      }
    });
    let tempUsr=new UserClass(id, usrID, passwd, Role.Student)
    this.UserList.push(tempUsr)
    console.log(tempUsr);
   }

   addFaculty(facObj:tempFaculty){
    let id=this.ID;
    let passwd='654321'
    this.FacultyList.push({FID:id,Password:passwd,...facObj});
    let usrID=facObj.Name.split(" ")[0].toLowerCase()+'.'+facObj.Name.split(" ")[1].toLowerCase();
    this.AllUsers.forEach(u=>{
      if(u.UserID===usrID){
        usrID+=String(id)
      }
    });
    let tempUsr=new UserClass(id, usrID, passwd, Role.Faculty)
    this.UserList.push(tempUsr)
    console.log(tempUsr);
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
