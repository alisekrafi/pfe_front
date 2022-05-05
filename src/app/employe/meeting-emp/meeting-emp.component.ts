import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/admin/modal/meeting';
import { MeetingService } from 'src/app/admin/services/meeting.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-meeting-emp',
  templateUrl: './meeting-emp.component.html',
  styleUrls: ['./meeting-emp.component.css']
})
export class MeetingEmpComponent implements OnInit {
  meetings :Meeting[]=[];
  token=sessionStorage.getItem('token')||""
  user:any=jwt_decode(this.token)
  constructor(private meetingService:MeetingService) { }

  ngOnInit(): void { 
    this.getb()
  }
  getb() {
    
    this.meetingService.getdataid(this.user.employe.id).subscribe((data) => {
      this.meetings = data
      console.log(data);

    }); 
  }
}
