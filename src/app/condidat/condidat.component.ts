import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from '../admin/modal/employe';


@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {

  condidateForm!: FormGroup;
  url = 'http://localhost:3000/Users';
  constructor( 
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}
  employes: Employe[] = [];
  employe!: Employe;
  ngOnInit(): void {
    this.condidateForm = this.formbuilder.group({
      _id: [''],
      nom: [''],
      prenom: [''],
      email: [''],
      tel: [''],
      diplome: [''],
      genre:[''],
      experience:[''],
      date_nais:[''],
      niveau: [''],
      universte:[''],
      role: [''],
      type:[''],
    });
   
  } 
  getEmployes() {
    this.employes = [];
    this.http.get(this.url).subscribe((res: any) => {
      res.forEach((element: Employe) => {
        this.employes.push(element);
      });
    });
  }
  click(p: number) {
    this.router.navigateByUrl('/project/' + p);
  }
  updateEmploye() {
    let e = this.condidateForm.value;
    this.http
      .patch<Employe>(this.url + this.condidateForm.value.id, e)
      .subscribe((res: any) => {});
    this.condidateForm.reset();
    this.employes = [];
    this.getEmployes();
  }
  delete(e: number) {
    this.http.delete(this.url + e).subscribe((res: any) => {});
    this.getEmployes();
  }
  reset(e: Employe) {
   
    this.condidateForm.setValue(e);
  }
}

