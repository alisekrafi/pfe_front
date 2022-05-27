import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CondidatServiceService } from 'src/app/admin/services/condidat-service.service';
import { Employe } from '../../admin/modal/employe';


@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
  submitted:boolean=false;
  condidateForm!: FormGroup;
  cv:any;
  lettre:any;
  constructor( 
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private condidatservice: CondidatServiceService
  ) {}
  employes: Employe[] = [];
  employe!: Employe;
  ngOnInit(): void {
    this.condidateForm = this.formbuilder.group({
      
      nom: [''],
      prenom: [''],
      email: [''],
      tel: [''],
      diplome: [''],
      genre:[''],
      experience:[''],
      date_nais:[''],
      niveau: [''],
      universite:[''],
      // cv:[''],
      // lettre:[''],
      type:[''],
     
    });
   
  } 
  submitcondidate(){
    console.log("form",this.condidateForm.value);
    
    const formData = new FormData();
  
    formData.append('file',this.cv);
    formData.append('file', this.lettre);
    formData.append('nom', this.condidateForm.value.nom);
    formData.append('prenom', this.condidateForm.value.prenom);
    formData.append('date_nais', this.condidateForm.value.date_nais);
    formData.append('tel', this.condidateForm.value.tel);
    formData.append('email', this.condidateForm.value.email);
    formData.append('diplome', this.condidateForm.value.diplome);
    formData.append('universite', this.condidateForm.value.universite);
    formData.append('experience', this.condidateForm.value.experience);
    formData.append('genre', this.condidateForm.value.genre);
    formData.append('niveau', this.condidateForm.value.niveau);
    formData.append('type',this.condidateForm.value.type);
    this.submitted = true;
this.http.post("http://localhost:5000/condidate/add",formData).subscribe((res:any)=>{
  console.log("res",res);
      this.router.navigate(["/reponse"])
    })
 
 }
 addCv(e:any){
  console.log(e.target.files[0]);
  this.cv=e.target.files[0]
}
addlettre(e:any){
  console.log(e.target.files[0]);
  this.lettre=e.target.files[0]
}

}

