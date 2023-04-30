import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCourseStudentComponent } from './display-course-student.component';

describe('DisplayCourseStudentComponent', () => {
  let component: DisplayCourseStudentComponent;
  let fixture: ComponentFixture<DisplayCourseStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCourseStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCourseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
