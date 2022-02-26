import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CondidatServiceService } from 'src/app/admin/services/condidate/condidat-service.service';
import { Condidate } from '../modal/condidate';


@Component({
  selector: 'app-liste-condidate',
  templateUrl: './liste-condidate.component.html',
  styleUrls: ['./liste-condidate.component.css']
})
export class ListeCondidateComponent implements OnInit {

  condidates : any[]=[];
  
  condidateForm!: FormGroup;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private condidatservice:CondidatServiceService
  ) {}
 

  ngOnInit(): void {
    
      this.condidateForm = this.formbuilder.group({
        id: [''],
        cin: [''],
        nom: [''],
        prenom: [''],
        date_nais:[''],
        email: [''],
        tel: [''],
        adresse: [''],
        genre:[''],
        role: [''],
      });
      
     
    this.getb();
  }
  reset(e: Condidate) {
   
    this.condidateForm.setValue(e);
  }
  getb(){
    this.condidatservice.getdata().subscribe((data)=>{
      this.condidates=data
      console.log(data);
      
    });
    
  }}
  

