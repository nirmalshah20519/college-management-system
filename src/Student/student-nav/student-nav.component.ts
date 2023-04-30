import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent {
  constructor(private serv:DataService, private rt:Router){

  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

  handleLogout(){
    this.rt.navigateByUrl('/')
    this.serv.CurrentUser={} as User;
  }

}
