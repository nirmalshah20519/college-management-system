import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCRUDComponent } from './faculty-crud.component';

describe('FacultyCRUDComponent', () => {
  let component: FacultyCRUDComponent;
  let fixture: ComponentFixture<FacultyCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
