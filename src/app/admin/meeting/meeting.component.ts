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
  meetingForm!: FormGroup;
  meetingaForm!: FormGroup;
  
  AllEmployes:any[]=[]
  employesAjouter:any[]=[]
  employesAjouter2:any[]=[]
  
  emps:any=[]
  
  visible=false

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
      time: [''], 
      equipe:[[]],
      __v:[],

  })
    this.meetingForm = this.formbuilder.group({
      _id: [''], 
      titre: [''], 
      sujet: [''], 
      date: [''], 
      time: [''],
      equipe:[[]],
      __v:[],

  })
  this.getAllEmployes();
  this.getMeeting();
}
   
  getAllEmployes(){
    this.employeService.getdata().subscribe((res:any)=>{
      this.AllEmployes=res
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
    this.AllEmployes.forEach(element => {
      if(element.nom.search(e.target.value)!=-1){
        this.emps.push(element)
        this.visible=true
      }
    });
  }
  
  addEmploye(e:any){
    if(this.employesAjouter.indexOf(e)==-1||this.employesAjouter.length==0){
      this.visible=false
      this.employesAjouter.push(e)
    }
  }
  addEmploye2(e:any){
 
    
    let exist=false
    this.employesAjouter2.forEach(element => {
      if(element._id==e._id) exist=true

    })
    if(!exist){
      this.visible=false
      this.employesAjouter2.push(e)
    }
  }
  removeEmploye(e:Employe){
    this.employesAjouter.splice(this.employesAjouter.indexOf(e),1)
  }
  removeEmploye2(e:Employe){
    this.employesAjouter2.splice(this.employesAjouter2.indexOf(e),1)
  }
  getMeeting() {
    this.meetingService.getdata().subscribe((data) => {
      this.meetings = data
      console.log(data);
    }); 
  } 
  reset(e:any){
    console.log("e",e);
    
    this.meetingForm.setValue(e)
  }
  updateModel(e: Meeting) {
    this.employesAjouter2=[]
    e.equipe.forEach(element => {
      this.employeService.getempbyid(element).subscribe(res=>{
        this.employesAjouter2.push(res[0])
      })
    })    
    this.meetingForm.setValue(e);
}
  update() {
    console.log("update",this.meetingForm.value);
    
    this.meetingForm.value.equipe=[]
    this.employesAjouter2.forEach(element => {
      this.meetingForm.value.equipe.push(element._id)
    });
    // console.log("value",this.meetingForm.value);
    
    this.meetingService.updatdata(this.meetingForm.value).subscribe(res => {
      console.log("empaa",this.meetingForm.value.equipe);
      this.getMeeting()
      this.meetingaForm.reset()
    })

  } 
  delete() {
    
    // console.log("delete",this.meetingForm.value.titre);
    
    this.meetingService.deletedata(this.meetingForm.value._id).subscribe(res => {
    this.getMeeting()
    })
 
  }  

  ajoutemeeting(){
    this.submitted = true;
    console.log(this.meetingaForm.value);
    this.meetingaForm.value.equipe=[]
    this.employesAjouter.forEach(element => {
      this.meetingaForm.value.equipe.push(element._id)
    });
    console.log(this.meetingaForm.value)
    this.http.post("http://localhost:5000/reunion/add",this.meetingaForm.value).subscribe((res:any)=>{
      this.getMeeting()
      this.meetingaForm.reset()
    })
  }
}


