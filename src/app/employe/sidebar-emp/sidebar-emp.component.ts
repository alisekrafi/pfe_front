import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/admin/services/auth.service';
@Component({
  selector: 'app-sidebar-emp',
  templateUrl: './sidebar-emp.component.html',
  styleUrls: ['./sidebar-emp.component.css']
})
export class SidebarEmpComponent implements OnInit {
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  constructor( public service: AuthService) {    }

  ngOnInit(): void {
    console.log("user",this.user)
    console.log("isauth",this.service.isauth)
  }
  

}
