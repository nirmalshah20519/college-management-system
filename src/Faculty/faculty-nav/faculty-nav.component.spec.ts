import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNavComponent } from './faculty-nav.component';

describe('FacultyNavComponent', () => {
  let component: FacultyNavComponent;
  let fixture: ComponentFixture<FacultyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
