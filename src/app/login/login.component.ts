import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../admin/services/auth.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform !: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, public auth: AuthService,private route :Router) { }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],  
    }) 
  }
  login() {
    console.log("work", this.loginform.value)
    this.auth.login(this.loginform.value).subscribe((res:any) => {
      console.log(res);
      sessionStorage.setItem("token",res.Token)
      console.log(sessionStorage.setItem("token",res.Token));
      let token=sessionStorage.getItem('token')||""
      let user:any=jwt_decode(token)
      console.log(user);
      
      if (user.employe.role === "ADMIN") {
        this.route.navigate(["/dashboard_admin"])
        this.auth.isauth = true;
      } else if (user.employe.role != "ADMIN") {
        this.route.navigate(["/dashboard_emp"])
        this.auth.isauth = true;
      }
      else {
        alert("user not found !!!!")
      }

    }, err => {
      console.log("error!!!!!!",err)
    })
  }

}

