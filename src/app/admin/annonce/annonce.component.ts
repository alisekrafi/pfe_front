import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Annonce } from '../modal/annonce';
import { AnnonceService } from '../services/annonce.service';
import jwt_decode from "jwt-decode";


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
  constructor(private formbuilder: FormBuilder,
    private http:HttpClient,private AnnonceService:AnnonceService) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem('token')||""
      let user:any=jwt_decode(token)
     
    this.annonceForm = this.formbuilder.group({
     _id:[''],
      titre: [''], 
     sujet: [''], 
      date: [''], 
      __v:[],
     
  })
  this.annonceaForm = this.formbuilder.group({
    //  _id:[''],
      titre: [''], 
     sujet: [''], 
      date: [new Date()] ,
      __v:[],
     
  })
  this.getb();
  
  
 }
  getb() {
    
    this.AnnonceService.getdata().subscribe((data) => {
      this.annonces = data
      console.log(data);
      // this.date=data[0].date.toISOString().slice(0, 5);
      // console.log("fff",this.date);

    });
  } 
  reset(e: Annonce) {
    console.log("eeeee",e);
   this.annonceForm.setValue(e);
  }
 
  mise() {
    this.AnnonceService.updatdata(this.annonceForm.value).subscribe(res => {
      this.getb()
      this.annonceForm.reset()
    })
  } 
  delete() {
    console.log("aaaaaaaa",this.annonceForm.value._id)
    this.AnnonceService.deletedata(this.annonceForm.value._id).subscribe(res => {
    this.getb()
    })

  }


  ajouteannonce(){
  
    this.submitted = true;
    
    this.http.post("http://localhost:5000/annonce/add",this.annonceaForm.value,{headers:this.headers}).subscribe((res:any)=>{
      console.log("add",this.annonceaForm.value);
      this.annonceaForm.reset()
      this.getb()
    })
  
  }
}
