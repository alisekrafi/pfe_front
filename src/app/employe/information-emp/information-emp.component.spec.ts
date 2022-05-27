import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEmpComponent } from './information-emp.component';

describe('InformationEmpComponent', () => {
  let component: InformationEmpComponent;
  let fixture: ComponentFixture<InformationEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationEmpComponent ]
    })
    .compileComponents();
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
