import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Concour } from 'src/app/admin/modal/concour';
import { ConcourService } from 'src/app/admin/services/concour.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-liste-concour-emp',
  templateUrl: './liste-concour-emp.component.html',
  styleUrls: ['./liste-concour-emp.component.css']
})
export class ListeConcourEmpComponent implements OnInit {
  concourForm!: FormGroup;
  concours:Concour[]=[]
  submitted:boolean=false
  headers = { 'token': sessionStorage.getItem('token')||""}
  
  constructor(  private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private ConcourService:ConcourService) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem('token')||""
    let user:any=jwt_decode(token)
    this.concourForm = this.formbuilder.group({
      // _id:[''],
      titre: ['', Validators.required],
      
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      particants:[[]],
    });
    this.getb();
  }
  getb() {
    
    this.ConcourService.getdata().subscribe((data) => {
      this.concours = data
      console.log(data);

    }); 
 
  }
  ajouteconcour(){
  
    this.submitted = true;
    
    this.http.post("http://localhost:5000/concour/add",this.concourForm.value,{headers:this.headers}).subscribe((res:any)=>{
      // console.log("add",this.annonceaForm.value);
      // this.toastrService.success(res.message);
      this.concourForm.reset()
      this.getb()
         
  }, err => {
    console.log("error!!!!!!",err.error.message)
    // this.toastrService.error( "vérifier les données","échec de l'ajout");
  })
  }
}
