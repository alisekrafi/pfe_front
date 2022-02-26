import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {
  employeForm!: FormGroup;
  constructor( private formbuilder: FormBuilder,
    private http:HttpClient) { }
    submitted=false
  ngOnInit(): void {
    this.employeForm = this.formbuilder.group({
      id: [''],
     cin: [''],
      nom : [''],
      prenom: [''],
      date_nais: [''],
      tel: [''],
      adresse: [''],
      email: [''],
      salaire: [''],
      genre: [''],
      role: [''],
      password: [''],
     
    })
  }
  
   
  submitEmploye(){
  
    this.submitted = true;
    console.log(this.employeForm.value)
    this.http.post("http://localhost:3000/employe",this.employeForm.value).subscribe((res:any)=>{
    })
  }

}
