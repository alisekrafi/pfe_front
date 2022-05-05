import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { EmpolyeService } from '../services/empolye.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] 
})
export class SidebarComponent implements OnInit {
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  employes2!:String;
  constructor(private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService) { }

  ngOnInit(): void {
    this. getbbyid() 
    console.log("token",this.token);
    
  } 
  getbbyid() {
       console.log("emp22é",this.user.employe.id)
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes2 = data[0].images.url
      console.log("data",data[0].images.url);
      
      
      //  console.log("url",this.employes2[0].images.url)
    
    });

  }
}
 