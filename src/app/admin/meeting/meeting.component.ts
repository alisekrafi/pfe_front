import { Component, OnInit } from '@angular/core';
import { Employe } from '../modal/employe';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Meeting } from '../modal/meeting';
import { MeetingService } from 'src/app/admin/services/meeting.service';
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  teams:any[]=[]
  emps:any=[]
  employes:any[]=[]
  visible=false
  meetingForm!: FormGroup;
  meetingaForm!: FormGroup;
  submitted=false;
 
  meetings:Meeting[]=[];



  constructor( private formbuilder: FormBuilder,
    private http:HttpClient,private employeService:EmpolyeService,private meetingService:MeetingService) { }
  ngOnInit(): void {
    this.meetingaForm = this.formbuilder.group({
      // _id: [''], 
      titre: [''], 
     sujet: [''], 
      date: [''], 
      equipe:[[]],
      __v:[],

  })
    this.meetingForm = this.formbuilder.group({
      _id: [''], 
      titre: [''], 
     sujet: [''], 
      date: [''], 
      equipe:[],
      __v:[],

  })
  this.getb();
  this.getEmployes();
}
   

  getEmployes(){
    this.employeService.getdata().subscribe((res:any)=>{
      res.forEach((element:Employe) => {
        this.employes.push(element)
      });
    })
  } 
  // zone
  blure(){
    this.emps=[]
    this.visible=false
  }

  // recherche
  input(e:any){
    this.emps=[]
    
    
    this.employes.forEach(element => {
      if(element.nom.search(e.target.value)!=-1){
        this.emps.push(element)
        this.visible=true
      }
    });
  }
  addChip(e:any){
    if(this.teams.indexOf(e)==-1||this.teams.length==0){
      this.visible=false
      this.teams.push(e._id)
    }
  }
  removeChip(e:Employe){
    this.teams.splice(this.teams.indexOf(e),1)
  }
  getb() {
    
    this.meetingService.getdata().subscribe((data) => {
      this.meetings = data
      console.log(data);
      // console.log("dddddddddddddddddddddddddddddddddd",data[0].equipe);
    }); 
  } 
  reset(e: Meeting) { 
   
      this.teams=e.equipe;
    
  console.log(e.temp);

    this.meetingForm.setValue(e);
    this.meetingForm.value.equipe=""
    console.log(this.meetingForm.value);
    
  }
  mise() {
    console.log("emp",this.meetingForm.value.equipe);
    this.meetingService.updatdata(this.meetingForm.value).subscribe(res => {
      console.log("empaa",this.meetingForm.value.equipe);
      this.getb()
    }) 
  } 
  delete() {
    
    this.meetingService.deletedata(this.meetingForm.value._id).subscribe(res => {

  this.getb()
    })
 
  }  
  ajoutemeeting(){
  
    this.submitted = true;
    this.meetingaForm.value.equipe=this.teams;
    console.log(this.meetingaForm.value)
    this.http.post("http://localhost:5000/reunion/add",this.meetingaForm.value).subscribe((res:any)=>{
      this.getb()
      this.meetingaForm.reset()
    })
    
  }
}


