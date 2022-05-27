import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from '../modal/employe';
import { EmpolyeService } from '../services/empolye.service';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
}) 
export class UpdateInfoComponent implements OnInit {
  employeForm!: FormGroup;
  changeForm!: FormGroup;
  passwordForm!: FormGroup;
  employes2: Employe[] = [];
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token) 
  submitted:boolean=false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService,private toastrService: ToastrService
  ) { } 

  ngOnInit(): void { 
    this.employeForm = this.formbuilder.group({
      _id:[''],
      cin:['', [ Validators.required, Validators.min(10000000)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_nais: ['', Validators.required],
      tel:['',[ Validators.required, Validators.min(10000000)]],
      adresse : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
       salaire : ['', Validators.required],
      genre : ['', Validators.required],
      role : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordChangeDate:[],
      DeconnectionTime:[],
      images:[],
      __v:[],
    });  
   

    this.reset();
        

   
  }
  reset() {
    
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes2 = data;
      this.employeForm.setValue(data[0]);
      
    });

  }; 
 
  update() {
    this.submitted=true;
    if(this.employeForm.invalid)
    { this.toastrService.error( "vérifier les données","échec de mise a jour");}
    else{
  this.employeService.updatdata(this.employeForm.value).subscribe(res => {
    this.toastrService.success(res.message);
   this.reset()
   
       
  
  })
  }}
  
}
 

