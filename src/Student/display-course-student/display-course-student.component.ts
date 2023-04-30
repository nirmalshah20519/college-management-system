import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-display-course-student',
  templateUrl: './display-course-student.component.html',
  styleUrls: ['./display-course-student.component.css']
})
export class DisplayCourseStudentComponent {

  currCID!:number;
  constructor(private serv:DataService, rt:ActivatedRoute){
    rt.paramMap.subscribe(c=>{
      this.currCID=Number(c.get('CID'))
      console.log(this.currCID);
    })
  }

}
