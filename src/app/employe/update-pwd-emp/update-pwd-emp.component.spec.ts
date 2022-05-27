import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePwdEmpComponent } from './update-pwd-emp.component';

describe('UpdatePwdEmpComponent', () => {
  let component: UpdatePwdEmpComponent;
  let fixture: ComponentFixture<UpdatePwdEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePwdEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePwdEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
