import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-course-management-faculty',
  templateUrl: './course-management-faculty.component.html',
  styleUrls: ['./course-management-faculty.component.css']
})
export class CourseManagementFacultyComponent {
  currCID!:number;

  constructor(private serv:DataService, private rt:ActivatedRoute){
    rt.paramMap.subscribe(val=>{
      this.currCID=Number(val.get('CID'))
    })
  }

  get CourseDetails(){
    return this.serv.CourseList.find(c=>c.CID===this.currCID)
  }

}
