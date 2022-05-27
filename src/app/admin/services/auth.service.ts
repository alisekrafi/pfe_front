import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers!:any;
  isauth: boolean = false;
  constructor(private http:HttpClient,) {
    this.headers = { 'token': sessionStorage.getItem('token')||""}
    if(sessionStorage.getItem('token')!=null){
      this.isauth=true;
    }

   }
  

  login(f:any){
    return this.http.post("http://localhost:5000/auth/login",f)
  }
  logout(){
    this.headers = { 'token': sessionStorage.getItem('token')||""}
console.log("headers log out",this.headers);

    return this.http.post("http://localhost:5000/auth/logout",{},{headers:this.headers})

  }

  forgetPassword(f:any){
    return this.http.post("http://localhost:5000/auth/forgot-password",f)
  }
 
  resetPassword(password:any,token:any){
    console.log(token);

    return this.http.post("http://localhost:5000/auth/reset-password/",password,{headers:{'token':token}})

  }
  changepwd(p:any){

    this.headers = { 'token': sessionStorage.getItem('token')||""}
    
        return this.http.post("http://localhost:5000/auth/changePassword",p,{headers:this.headers})
    
      }
  changeImage(image:any){
 
    this.headers = { 'token': sessionStorage.getItem('token')||""}
    
        return this.http.post("http://localhost:5000/employe/image",image,{headers:this.headers})
    
      }
}
