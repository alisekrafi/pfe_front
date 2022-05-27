import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Conge } from 'src/app/admin/modal/conge';
import { CongeService } from 'src/app/admin/services/conge.service';
import jwt_decode from "jwt-decode";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html', 
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
  congeForm!: FormGroup; 
  congemForm!: FormGroup; 
  submitted=false;
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token) 
  conges:any[]=[];
  conges2:any;
  tab=new Array();
  constructor(private formbuilder: FormBuilder,private datePipe: DatePipe,
    private http:HttpClient,private congeService:CongeService) { }

  ngOnInit(): void {
    this.congeForm= this.formbuilder.group({
      // _id:[''],
      raison: [''], 
     date_debut: [''], 
      date_fin: [''], 
      id_emp:[this.user.employe.id],
      status:[], 
      raison_ref:['en attend la reponse'],
      date_dem: [this.datePipe.transform(new Date(),"yyyy-MM-dd")] ,
      __v:[],
     
  })   
  this.congemForm= this.formbuilder.group({
    _id:[''],
    raison: [''], 
    date_debut: [''], 
    date_fin: [''], 
    id_emp:[this.user.employe.id],
    status:[],
    raison_ref:[''],
    date_dem: [this.datePipe.transform(new Date(),"yyyy-MM-dd")] ,
    __v:[],
   
})
  this.getb();
 }
  getb() {
    
    this.congeService.getdatabyidemp(this.user.employe.id).subscribe((data) => {
      this.conges=data;
      console.log(data);
    

    });
  } 
  reset(e: Conge) {
    console.log("eeeee",e);
   this.congemForm.setValue(e);
  //  this.conges2=e;
  } 
  reset2(e: Conge) {
    console.log("eeeee",e);
   this.congeForm.setValue(e);
  //  this.conges2=e;
  } 
  getbbyid(e : any) {
    
    this.congeService.getdatabyid(e._id).subscribe((data) => {
      this.conges2 = data
      console.log("data",data);
      
       console.log("emp22é",this.conges2[0])
    
    });

  }
 
  mise() {
    console.log("eid",this.congemForm.value);
    this.congeService.updatdata(this.congemForm.value).subscribe(res => {
      this.getb()
    })
  } 
  delete() {
    console.log("aaaaaaaa",this.congemForm.value._id)
    this.congeService.deletedata(this.congemForm.value._id).subscribe(res => {
    this.getb()
    })

  }

  submitconge(){
    
    
    if (this.congeForm.invalid) {
      
      console.log("ffffff",this.congeForm.controls   );

      
      return;
  }
  this.submitted = true;
  this.congeService.addConge(this.congeForm.value).subscribe((res:any)=>{
    
      this.congeForm.reset();
      
      this.getb();
      
    })}
 
}
