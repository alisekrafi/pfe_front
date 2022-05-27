import { Component, OnInit } from '@angular/core';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  employes: any;
  constructor(private employeService: EmpolyeService) { }
 
  ngOnInit(): void { 
    

   this.getb()
  }
  getb() {
    
    this.employeService.getempbyid(this.user.employe.id).subscribe((data) => {
      this.employes = data
      console.log("datacc",data[0].images.url);
   
    });

  }
}
 