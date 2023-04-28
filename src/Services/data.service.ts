import { Injectable } from '@angular/core';
import { Course, CourseClass } from 'src/Models/Course';
import { Exam } from 'src/Models/Exam';
import { Faculty, tempFaculty, tempFacultyClass } from 'src/Models/Faculty';
import { Lecture, LectureClass } from 'src/Models/Lecture';
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
  LectureList:Lecture[]=[];
  ExamList:Exam[]=[];
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

    this.AddFac(4,1);
    this.AddFac(4,2);

    // this.enrollStudent(this.StudentList[0],this.CourseList[0]);
    // this.enrollStudent(this.StudentList[1],this.CourseList[0]);
    // this.enrollStudent(this.StudentList[2],this.CourseList[0]);
    // this.enrollStudent(this.StudentList[3],this.CourseList[0]);


  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'Basics of JS',[]))
  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'Let, Const Var',[]))
  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'Callbacks & Promises',[]))
  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'Data Binding',[]))
  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'SetTimeOut',[]))
  //   this.scheduleNewLecture(new LectureClass(this.LID,1,new Date(),'API Call',[]))
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
   }

   get ID(){
    return this.UserList.length===0?1:this.UserList[this.UserList.length-1].ID+1;
   }

   get CID(){
    return this.CourseList.length===0?1:this.CourseList[this.CourseList.length-1].CID+1;
   }

   get LID(){
    return this.LectureList.length===0?1:this.LectureList[this.LectureList.length-1].LID+1;
   }

   get EID(){
    return this.ExamList.length===0?1:this.ExamList[this.ExamList.length-1].EID+1;
   }

   get AllUsers(){
    return this.UserList
   }

   login(id:string, passwd:string){
    let usr=this.AllUsers.find(u=>u.UserID===id)
    if(usr){
      if(usr.Password===passwd){
        this.CurrentUser=usr;
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

   AddFac(FID:number, CID:number){
    let fac=this.FacultyList.find(f=>f.FID===FID)
    let findex=this.FacultyList.findIndex(f=>f.FID===FID)
    let course=this.CourseList.find(c=>c.CID===CID)
    let cindex=this.CourseList.findIndex(c=>c.CID===CID)
    if(cindex!==-1 && course!==undefined){
      course.FacultiesAssigned.push(FID)
      this.CourseList[cindex]=course;
    }

    if(findex!==-1 && fac!==undefined){
      fac.CoursesTaking.push(CID)
      this.FacultyList[findex]=fac;
    }
   }

   getAvailableFaculty(CID:number){
    let alreadyAssigned=this.CourseList.find(c=>c.CID===CID)?.FacultiesAssigned;
    if(alreadyAssigned?.length!==0){
      return this.FacultyList.filter(f=>!alreadyAssigned?.includes(f.FID))
    }
    return this.FacultyList
   }

   getAssignedFaculty(CID:number){
    let alreadyAssigned=this.CourseList.find(c=>c.CID===CID)?.FacultiesAssigned;
    return this.FacultyList.filter(f=>alreadyAssigned?.includes(f.FID))
   }

   enrollStudent(Stu:Student, course:Course){
    let sindex=this.StudentList.findIndex(s=>s===Stu);
    let cindex=this.CourseList.findIndex(c=>c===course);
    Stu.CoursesEnrolled.push(course.CID);
    course.EnrolledStudents.push(Stu.SID);
    this.StudentList[sindex]=Stu;
    this.CourseList[cindex]=course;
   }

   scheduleNewLecture(lec:Lecture){
    this.LectureList.push(lec)
   }

   scheduleNewExam(exam:Exam){
    this.ExamList.push(exam)
   }


}
