import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../admin/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public forgetform !: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, public auth: AuthService,private route :Router) { }
  ngOnInit(): void {
    this.forgetform = this.fb.group({
      email: ['', Validators.email],
    }) 
  }
  submit(){
    console.log(this.forgetform.value.email);
    
    this.auth.forgetPassword(this.forgetform.value.email).subscribe(res => {
      
      // this.employeForm.reset();
      
    }) 
  }
}