import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Annonce } from 'src/app/admin/modal/annonce';
import { AnnonceService } from 'src/app/admin/services/annonce.service';

@Component({
  selector: 'app-annonce-emp',
  templateUrl: './annonce-emp.component.html',
  styleUrls: ['./annonce-emp.component.css']
})
export class AnnonceEmpComponent implements OnInit {

  annonceForm!: FormGroup;
  submitted=false;
 
  annonces:Annonce[]=[];
  constructor(private formbuilder: FormBuilder,
    private http:HttpClient,private AnnonceService:AnnonceService) { }

  ngOnInit(): void {
    this.annonceForm = this.formbuilder.group({
      id: [''], 
      titre: [''], 
     sujet: [''], 
      date: [''], 
     
  })
  this.getb();
 }
  getb() {
    
    this.AnnonceService.getdata().subscribe((data) => {
      this.annonces = data
      console.log(data);

    });
  } 
  reset(e: Annonce) {
    console.log("eeeee",e);
   this.annonceForm.setValue(e);
  }

  mise() {
    this.AnnonceService.updatdata(this.annonceForm.value).subscribe(res => {
      this.getb()
    })
  } 
  delete() {
    console.log("aaaaaaaa",this.annonceForm.value.id)
    this.AnnonceService.deletedata(this.annonceForm.value.id).subscribe(res => {
    this.getb()
    })

  }


  ajouteannonce(){
  
    this.submitted = true;
    
    this.http.post("http://localhost:3000/annonce",this.annonceForm.value).subscribe((res:any)=>{
      this.getb()
    })
  
  }
}
