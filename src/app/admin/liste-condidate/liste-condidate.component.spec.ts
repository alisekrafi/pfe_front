import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCondidateComponent } from './liste-condidate.component';

describe('ListeCondidateComponent', () => {
  let component: ListeCondidateComponent;
  let fixture: ComponentFixture<ListeCondidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCondidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
