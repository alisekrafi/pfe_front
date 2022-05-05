import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from '../modal/employe';
import { EmpolyeService } from '../services/empolye.service';
import jwt_decode from "jwt-decode";


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
  public isVisible: boolean = false
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService
  ) { } 

  ngOnInit(): void { 
    this.employeForm = this.formbuilder.group({
      _id:[''],
      cin:['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_nais: ['', Validators.required],
      tel:['', [Validators.required, Validators.minLength(8)]],
      adresse : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
       salaire : ['', Validators.required],
      genre : ['', Validators.required],
      role : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordChangeDate:[],
      DeconnectionTime:[],
      images:[],
      __v:[],
    });  
   

    // console.log("id",this.user.employe.id)
    this.reset();
        //  console.log("dataAAAA",this.employes2)

   
  }
  reset() {
    
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes2 = data;
      this.employeForm.setValue(data[0]);
     console.log("data",data)
    //  console.log("tel",data[0].tel)
    //  console.log("adddd",data[0].adresse)
     
     
    });

  };
  showAlert() : void {
    if (this.isVisible) { 
      return; 
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,4000)
  };
  update() {
    this.showAlert();
  this.employeService.updatdata(this.employeForm.value).subscribe(res => {
   this.reset()
      // this.employeForm.reset();
       
    }) 
  }
  
}
 

