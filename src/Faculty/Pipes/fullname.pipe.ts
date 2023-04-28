import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  constructor(private serv:DataService){

  }

  transform(value: string): string {
    let FID=this.serv.AllUsers.find(u=>u.UserID===value)?.ID;
    let name=this.serv.FacultyList.find(s=>s.FID===FID)?.Name
    return name as string    
  }

}
