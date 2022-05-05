import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../admin/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm!: FormGroup;
  error = ""
  submitted = false
  token:any
  constructor(private formbuilder: FormBuilder, private router: Router,private route: ActivatedRoute, private auth:AuthService) {
    this.route.paramMap.subscribe(params => {
     this.token=params.get('token')
    })
  }
  ngOnInit(): void {
    this.ResetPasswordForm = this.formbuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  submit(){
    console.log(this.ResetPasswordForm.value.password);
    
    this.submitted = true;
    this.error=""
    // stop here if form is invalid
    if (this.ResetPasswordForm.valid&&this.ResetPasswordForm.value.password===this.ResetPasswordForm.value.confirm) {
      this.auth.resetPassword(this.ResetPasswordForm.value,this.token).subscribe((res:any)=>{
        this.router.navigateByUrl('/login')
      },
      (err:any)=>{
        throw err
      })
      
    }else this.error="wrong confirm Password"
  }
}

