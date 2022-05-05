import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from '../modal/employe';
import { EmpolyeService } from '../services/empolye.service';
import jwt_decode from "jwt-decode";
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.css']
})

export class UpdatePwdComponent implements OnInit {
  employes2!: any[];
  changeForm!: FormGroup;
  imageForm!: FormGroup;
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token) 
  submitted=false
  constructor( private http: HttpClient,
    private router: Router,
    public auth: AuthService,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService) { }

  ngOnInit(): void {
    this.changeForm = this.formbuilder.group({
      id:[]=this.user.employe.id,
      password: [''],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    })
    // ***********************************
    this.imageForm = this.formbuilder.group({
      id:[]=this.user.employe.id,
      image:[''],

    })
    this.get_emp()
  }
 get_emp() {
    
  
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes2 = data;
      
     console.log("data",data)
});

  };
  update() {
   console.log("passwor",this.changeForm.value);
  this.auth.changepwd(this.changeForm.value).subscribe(res => {
    // console.log("res",res);
    // console.error("err",Error);
    
    
  //  this.get_emp();
      this.changeForm.reset();
       
    }) 
  }
}
