import { Component, OnInit } from '@angular/core';
import { Employe } from '../modal/employe';
import { EmpolyeService } from '../services/empolye.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
