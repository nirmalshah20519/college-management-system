import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/Services/data.service';

@Pipe({
  name: 'totalmarks'
})
export class TotalmarksPipe implements PipeTransform {
  constructor(private serv:DataService){

  }

  transform(value: number ): number {
    console.log(value);
    return this.serv.ExamList.find(ex=>ex.EID===Number(value))?.TotalMarks as number
  }

}
