import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseCongeComponent } from './reponse-conge.component';

describe('ReponseCongeComponent', () => {
  let component: ReponseCongeComponent;
  let fixture: ComponentFixture<ReponseCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
