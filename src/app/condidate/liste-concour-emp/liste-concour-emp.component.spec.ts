import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConcourEmpComponent } from './liste-concour-emp.component';

describe('ListeConcourEmpComponent', () => {
  let component: ListeConcourEmpComponent;
  let fixture: ComponentFixture<ListeConcourEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConcourEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConcourEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
