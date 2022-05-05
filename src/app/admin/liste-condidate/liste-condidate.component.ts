import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CondidatServiceService } from 'src/app/admin/services/condidat-service.service';
import { Condidate } from '../modal/condidate';


@Component({
  selector: 'app-liste-condidate',
  templateUrl: './liste-condidate.component.html',
  styleUrls: ['./liste-condidate.component.css']
})
export class ListeCondidateComponent implements OnInit {

  condidates: any[] = [];

  condidateForm!: FormGroup;
  reponseForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private condidatservice: CondidatServiceService
  ) { }


  ngOnInit(): void {

    this.condidateForm = this.formbuilder.group({
      _id: [''],
      cin: [''],
      nom: [''],
      prenom: [''],
      date_nais: [''],
      email: [''],
      tel: [''],
      adresse: [''],
      genre: [''],
      __v: [''],
      role: [''],
      type: [''],
    });
    this.reponseForm = this.formbuilder.group({
      titre: [''],
      text: [''],
      to: [''],
      
    });


    this.getb();
  }
  reset(e: Condidate) {
    
    this.condidateForm.setValue(e);
    
    
  }
  getb() {
    this.condidatservice.getdata().subscribe((data) => {
      this.condidates = data
      console.log(data);
 
    }); 

  }  
  delete() {
    
    console.log("aaaaaaaa",this.condidateForm.value._id)
    
    this.condidatservice.deletedata(this.condidateForm.value._id).subscribe(res => {
    this.getb()
    })

  }
  sedmail(){
    console.log("vall",this.condidateForm.value)
    // console.log("mailaa",this.condidateForm.value.email)
    // console.log("mail",this.reponseForm.value)
    this.condidatservice.sendmail(this.reponseForm.value).subscribe(res => {
      console.log("res",res)

      this.reponseForm.reset()
    })
  }
}


 