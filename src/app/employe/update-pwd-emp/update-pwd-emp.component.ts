import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/admin/services/auth.service';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-pwd-emp',
  templateUrl: './update-pwd-emp.component.html',
  styleUrls: ['./update-pwd-emp.component.css']
}) 
export class UpdatePwdEmpComponent implements OnInit {
  employe!: any;
  changeForm!: FormGroup;
  imageForm!: FormGroup;
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token) 
  submitted=false
  image:any
  constructor( private http: HttpClient,
    private router: Router,
    public auth: AuthService,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.changeForm = this.formbuilder.group({
      id:[]=this.user.employe.id,
      password: [''],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
    
    this.imageForm = this.formbuilder.group({
      id:[]=this.user.employe.id,
      image:[''],

    })
    this.get_emp()
  }
 get_emp() {
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employe = data[0];
     console.log("data",data)
});

  }; 
  update() {
   console.log("passwor",this.changeForm.value);
  this.auth.changepwd(this.changeForm.value).subscribe(res => {
    this.toastrService.success("Votre mot de passe a été changé avec succès");
      this.changeForm.reset(); 
      }, err => {
   
    this.toastrService.error(err.error.message);
  })
  } 

  updateImage(){
    const formData = new FormData();
    formData.append('image', this.image)
    this.auth.changeImage(formData).subscribe((res:any)=>{
      this.toastrService.success("mise a jour de photo avec succès");
      this.employe.images.url=res.message
    }, err => {
    
      this.toastrService.error(err.error.message);
    })
  }
   change(e:any){
    console.log(e.target.files[0]);
    this.image=e.target.files[0]
  }
 
}
