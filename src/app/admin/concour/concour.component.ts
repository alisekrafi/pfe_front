import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Concour } from '../modal/concour';
import { EmpolyeService } from '../services/empolye.service';
import jwt_decode from "jwt-decode";
import { ConcourService } from '../services/concour.service';
@Component({ 
  selector: 'app-concour',
  templateUrl: './concour.component.html',
  styleUrls: ['./concour.component.css']
})
export class ConcourComponent implements OnInit {
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
    console.log("add",this.concourForm.value);
    this.http.post("http://localhost:5000/concour/add",this.concourForm.value).subscribe((res:any)=>{
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
