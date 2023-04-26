import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/Services/data.service';
import { AdminModule } from 'src/Admin/admin.module';
import { FacultyModule } from 'src/Faculty/faculty.module';
import { StudentModule } from 'src/Student/student.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ 
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
