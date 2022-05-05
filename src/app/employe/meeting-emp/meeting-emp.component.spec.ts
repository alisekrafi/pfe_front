import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingEmpComponent } from './meeting-emp.component';

describe('MeetingEmpComponent', () => {
  let component: MeetingEmpComponent;
  let fixture: ComponentFixture<MeetingEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
