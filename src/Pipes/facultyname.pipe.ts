import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'facultyname'
})
export class FacultynamePipe implements PipeTransform {
  constructor(private serv:DataService) {
    
  }

  transform(value: number): string {
    let facultyname=this.serv.FacultyList.find(f=>f.FID===value)?.Name
    return facultyname as string;
  }

}
