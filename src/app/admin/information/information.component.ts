import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { CondidatServiceService } from '../services/condidat-service.service';
import { CongeService } from '../services/conge.service';
import { EmpolyeService } from '../services/empolye.service';
import { MeetingService } from '../services/meeting.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
employe!:number;

congeat!:number;
meeting !:number;
annonce!:number;
condidat!:number;
token=sessionStorage.getItem('token')||""
user:any=jwt_decode(this.token)
date:any=this.datePipe.transform(Date.now(),"yyyy-MM-dd")
  constructor( private CongeService: CongeService,
    private employeService: EmpolyeService,
    private meetingService:MeetingService,
    private annonceService:AnnonceService,
    private datePipe: DatePipe,
    private condidateService:CondidatServiceService) { }
   
  ngOnInit(): void {
   
    this.detail_employe();
    this.detail_annonce();
    this.detail_condidat();
    this.detail_meeting();
  
   this.CongeService.countr().subscribe((dat) => {
    console.log("count en attend",dat);
    this.congeat=dat
 })
}
detail_employe() {
  this.employeService.count().subscribe((da) => {
    //  console.log("employe",da);
    this.employe=da;
  })
}


detail_condidat() {
  this.condidateService.count().subscribe((data) => {
    
     this.condidat=data;
  })

}
detail_annonce() {
  this.annonceService.count().subscribe((data) => {
  
    this.annonce=data;
  })

}
detail_meeting() {
  this.meetingService.count(this.date).subscribe((data) => {
   
    this.meeting=data;
  })

}

}
