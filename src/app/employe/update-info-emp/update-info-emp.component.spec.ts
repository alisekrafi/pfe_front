import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoEmpComponent } from './update-info-emp.component';

describe('UpdateInfoEmpComponent', () => {
  let component: UpdateInfoEmpComponent;
  let fixture: ComponentFixture<UpdateInfoEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
