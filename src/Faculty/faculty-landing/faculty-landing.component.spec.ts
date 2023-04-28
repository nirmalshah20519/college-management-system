import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLandingComponent } from './faculty-landing.component';

describe('FacultyLandingComponent', () => {
  let component: FacultyLandingComponent;
  let fixture: ComponentFixture<FacultyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
