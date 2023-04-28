import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private serv:DataService, private rt:Router){

  }

  handleLogout(){
    this.setCurrSub(undefined)
    this.rt.navigateByUrl('/')
    this.serv.CurrentUser={} as User;
    console.log(this.serv.CurrentUser);
  }

  get CurrCourse(){
    return this.serv.currSub
  }

  setCurrSub(subName:string|undefined){
    this.serv.currSub=subName
  }

  get CurrentUser(){
    return this.serv.CurrentUser
  }

}
