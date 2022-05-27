import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CongeService } from 'src/app/admin/services/conge.service';
import { Conge } from '../modal/conge';
import { Employe } from '../modal/employe';
import { EmpolyeService } from '../services/empolye.service';
 
@Component({
  selector: 'app-liste-conge',
  templateUrl: './liste-conge.component.html',
  styleUrls: ['./liste-conge.component.css']
})
export class ListeCongeComponent implements OnInit {
// tab=Array();
tab:any[]=[];
congeForm!: FormGroup;



  constructor(private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private CongeService: CongeService,
    private employeService: EmpolyeService
  ) { }

  ngOnInit(): void {
    this.congeForm = this.formbuilder.group({
      // _id:[''],
      status:[],
       date_debut:[''],
       date_fin:[''],
       date_dem:[''],
       id_emp:[''],
       raison:[''],
       nom:[''],
       prenom:['',]
      //  __v:[],
      
   })
    this.getconge();
  } 
  getconge() { 
    this.CongeService.getdata().subscribe((data) => {
console.log("data",data);
// console.log("tab1",this.tab);
this.tab=[];
// console.log("tabbbbb",this.tab);
      data.forEach((element:any) => {
        this.employeService.getempbyid(element.id_emp).subscribe((res) => {
          this.tab.push( new Conge(element.date_debut,element.date_fin,element.date_dem,element._id,element.raison,res[0].nom,element.status,res[0].prenom))
         });
      })
      
    })
     

  }
  reset(e:any) {
    console.log("dd",e);
    this.congeForm.setValue(e);
  }
  delete() {
    console.log("idid",this.congeForm.value.id_emp);
    
    
   this.CongeService.deletedata(this.congeForm.value.id_emp).subscribe((res)=>{
    this.getconge();
   })
   
  }
 }
