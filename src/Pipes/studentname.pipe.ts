import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'studentname'
})
export class StudentnamePipe implements PipeTransform {

  constructor(private serv:DataService){

  }

  transform(sid: number): string {
    return this.serv.StudentList.find(st=>st.SID===sid)?.Name as string
  }

}
