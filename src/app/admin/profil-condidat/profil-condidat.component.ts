import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CondidatServiceService } from '../services/condidat-service.service';

@Component({
  selector: 'app-profil-condidat',
  templateUrl: './profil-condidat.component.html',
  styleUrls: ['./profil-condidat.component.css']
})
export class ProfilCondidatComponent implements OnInit {
  candidate: any;
  id:any;
  constructor(private route: ActivatedRoute,
    
 
    private condidatservice: CondidatServiceService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id')
    console.log("id",this.route.snapshot.paramMap.get('id'));
   this.getb()
   
   
  }
  getb() {
    this.candidate="";
    this.condidatservice.getdatabyid(this.id).subscribe((data) => {
      this.candidate = data
      console.log(data);
 
    }); 

  }  
  sedmailaccepter(){
    console.log("kkkkk");
    
    this.condidatservice.sendmailaccept({email:this.candidate.email}).subscribe(res => {
      console.log("res",res)

      
    })
  }
  sedmailrefuser(){
    this.condidatservice.sendmailrefuser({email:this.candidate.email}).subscribe(res => {
      console.log("res",res)

      
    })
  }
}
