import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annonce } from '../modal/annonce';
import { AnnonceService } from '../services/annonce.service';
import jwt_decode from "jwt-decode";
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
 

@Component({ 
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  headers = { 'token': sessionStorage.getItem('token')||""}
  annonceForm!: FormGroup;
  annonceaForm!: FormGroup;
  submitted=false;
//  date!:String;
  annonces:Annonce[]=[];
  constructor(private formbuilder: FormBuilder,private datePipe: DatePipe,
    private http:HttpClient,private AnnonceService:AnnonceService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem('token')||""
      let user:any=jwt_decode(token)
    

  // console.log("ddd",this.datePipe.transform(date,"yyyy-MM-dd")); 
    this.annonceForm = this.formbuilder.group({
     _id:[''],
      titre: ['', Validators.required], 
     sujet: ['', Validators.required], 
      date: [''], 
      __v:[],
     
  })
  this.annonceaForm = this.formbuilder.group({
    
      titre: ['', Validators.required], 
     sujet: ['', Validators.required], 
      date: [this.datePipe.transform(new Date(),"yyyy-MM-dd")] ,
      __v:[],
     
  })
  this.getb();
  
  
 }
  getb() {
    
    this.AnnonceService.getdata().subscribe((data) => {
      this.annonces = data
   
    });
  } 
  reset(e: Annonce) {
    console.log("eeeee",e);
   this.annonceForm.setValue(e);
  }
  
  mise() {
    this.AnnonceService.updatdata(this.annonceForm.value).subscribe(res => {
      this.getb()
      this.toastrService.success(res.message);
      this.annonceForm.reset()
    })
  } 
  delete() {
    console.log("aaaaaaaa",this.annonceForm.value._id)
    this.AnnonceService.deletedata(this.annonceForm.value._id).subscribe(res => {
      this.toastrService.success(res.message);
    this.getb()
    })

  }


  ajouteannonce(){
  
    this.submitted = true;
    
    this.http.post("http://localhost:5000/annonce/add",this.annonceaForm.value,{headers:this.headers}).subscribe((res:any)=>{
      // console.log("add",this.annonceaForm.value);
      this.toastrService.success(res.message);
      this.annonceaForm.reset()
      this.getb()
         
  }, err => {
    console.log("error!!!!!!",err.error.message)
    this.toastrService.error( "vérifier les données","échec de l'ajout");
  })
  }
}
