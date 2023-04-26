import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageClass } from 'src/Models/Message';
import { User } from 'src/Models/User';
import { DataService } from 'src/Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'college-management-system';
  Login!:FormGroup;
  UserList!:User[];
  ModalObj:Message={} as Message;
  constructor(private fb:FormBuilder, private serv:DataService, private rt:Router){
    this.Login=this.fb.group({
      UserID:["",[Validators.required]],
      Password:["",[Validators.required]]
    });

    this.serv.login('admin', 'admin');
    this.navigateByRole('admin');
  }

  get userID(){
    return this.Login.get('UserID')?.value
  }

  get Password(){
    return this.Login.get('Password')?.value
  }

handleModal(messageObj:Message, flag:boolean|null){
    this.ModalObj=messageObj;
    (document.querySelector('#triggerMessageModal') as HTMLButtonElement).click();
    setTimeout(()=>{(document.querySelector('#close') as HTMLButtonElement).click();
                    if(flag===true){
                      this.navigateByRole(this.userID);
                      this.Login.reset();
                    }},2500);
}

  handleLogin(){
    let flag=this.serv.login(this.userID, this.Password);
    switch(flag){
      case true: this.handleModal(new MessageClass(`Welcome back ${this.userID}!`,`Hii ${this.userID}, Great to see you back Online`,'modal-header bg-success'), flag)
        
                  break;
      case false: this.handleModal(new MessageClass(`Wrong Password`,`Hii ${this.userID}, The Password You entered is wrong please try again with right password`,'modal-header bg-danger'), flag);
                  break;
      case null: this.handleModal(new MessageClass(`User Not Found`,`Kindly contact Admin for correct Login Credentials`,'modal-header bg-warning'), flag);
                  break;
    }
    
  }

  navigateByRole(id:string){
    let role=this.serv.getRoleByUserID(id)
    console.log(role);
    switch(role){
      case 1: this.rt.navigate(['/admin'])
              break;
      case 2: this.rt.navigate(['/faculty'])
              break;
      case 3: this.rt.navigate(['/student'])
              break;
      default: this.rt.navigate(['/'])
              break;
    }
  }
}
