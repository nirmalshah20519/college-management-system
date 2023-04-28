import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementFacultyComponent } from './course-management-faculty.component';

describe('CourseManagementFacultyComponent', () => {
  let component: CourseManagementFacultyComponent;
  let fixture: ComponentFixture<CourseManagementFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseManagementFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseManagementFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
