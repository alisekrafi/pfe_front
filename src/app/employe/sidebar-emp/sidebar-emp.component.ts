import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/admin/services/auth.service';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
@Component({
  selector: 'app-sidebar-emp',
  templateUrl: './sidebar-emp.component.html',
  styleUrls: ['./sidebar-emp.component.css']
})
export class SidebarEmpComponent implements OnInit {
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  employes2!:any[];
  constructor( private employeService: EmpolyeService) { }
 
  ngOnInit(): void {
    this. getbbyid() 
    console.log("token",this.token);
    
  } 
  getbbyid() {
       console.log("emp22é",this.user.employe.id)
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes2 = data
      console.log("data",data[0].images.url);
      
      
      //  console.log("url",this.employes2[0].images.url)
    
    });

  }
}
  