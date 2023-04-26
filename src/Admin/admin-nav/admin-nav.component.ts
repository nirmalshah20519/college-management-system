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
    this.rt.navigateByUrl('/')
    this.serv.CurrentUser={} as User;
    console.log(this.serv.CurrentUser);
  }

}
