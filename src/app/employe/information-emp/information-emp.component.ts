import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AnnonceService } from 'src/app/admin/services/annonce.service';
import { CondidatServiceService } from 'src/app/admin/services/condidat-service.service';
import { CongeService } from 'src/app/admin/services/conge.service';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
import { MeetingService } from 'src/app/admin/services/meeting.service';

@Component({
  selector: 'app-information-emp',
  templateUrl: './information-emp.component.html',
  styleUrls: ['./information-emp.component.css']
})
export class InformationEmpComponent implements OnInit {
  
  conge!:number; 
  
  meeting !:number;
  annonce!:number;
  
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  date:any=this.datePipe.transform(Date.now(),"yyyy-MM-dd")
// a:any=["62716453f7cc92eac226c317",this.date]
arrays:Array<string> = [this.date,this.user.employe.id];
    constructor( private CongeService: CongeService,
      private employeService: EmpolyeService,
      private meetingService:MeetingService,
      private annonceService:AnnonceService,
      private datePipe: DatePipe,
      private condidateService:CondidatServiceService) { }
     
    ngOnInit(): void {

      this.detail_conge()
      
      this.detail_annonce();
    //  console.log("idssssssss",this.user.employe.id);
     
      this.detail_meeting();
      
    }
    detail_conge() {
     this.CongeService.count(this.user.employe.id).subscribe((data) => {
        console.log("count conge",data);
        this.conge=data;
     })
   
  }

  
 
  detail_annonce() {
    this.annonceService.count().subscribe((data) => {
      //  console.log("annonce",data);
      this.annonce=data;
    })
  
  }
  detail_meeting() {
    this.meetingService.countid(this.user.employe.id,this.date).subscribe((data) => {
      //  console.log("meeting",data);
      this.meeting=data;
    })
  
  }
  
  }
  