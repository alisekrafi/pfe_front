import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpolyeService } from 'src/app/admin/services/empolye/empolye.service';
import { Employe } from '../modal/employe';


@Component({
  selector: 'app-liste-emp',
  templateUrl: './liste-emp.component.html',
  styleUrls: ['./liste-emp.component.css']
})
export class ListeEmpComponent implements OnInit {  
  employeForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private employeService:EmpolyeService
  ) {}
 employes:Employe[] = [];
  employe:any;

  ngOnInit(): void {
    
      this.employeForm = this.formbuilder.group({
        id: [''],
     cin: [''],
      nom: [''],
      prenom: [''],
      date_nais: [''],
      tel: [''],
      adresse: [''],
      email: [''],
      salaire: [''],
      genre: [''],
      role: [''],
      password: [''],
      });
      
     
    this.getb();
  }
  reset(e: Employe) {
   
    this.employeForm.setValue(e);
  }
  mise(){
    this.employeService.updatdata(this.employeForm.value).subscribe(res=>{
      this.getb()
    })
  }
 delete(e: number) {
   
   this.employeService.deletedata(e).subscribe(res=>{
    this.getb()
   })

  }
  getb(){
    this.employes=[]
    this.employeService.getdata().subscribe((data)=>{
      this.employes=data
      console.log(data);
      
    });
    
  }}
  

