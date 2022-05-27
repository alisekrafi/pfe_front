import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCondidatComponent } from './profil-condidat.component';

describe('ProfilCondidatComponent', () => {
  let component: ProfilCondidatComponent;
  let fixture: ComponentFixture<ProfilCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
