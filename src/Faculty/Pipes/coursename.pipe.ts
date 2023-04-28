import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'coursename'
})
export class CoursenamePipe implements PipeTransform {
  constructor(private serv:DataService) {
    
  }

  transform(value: number): string {
    let courseName=this.serv.CourseList.find(c=>c.CID===value)?.Name
    return courseName as string;
  }

}
