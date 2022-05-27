import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpolyeService } from 'src/app/admin/services/empolye.service';
import { Employe } from '../modal/employe';


@Component({
  selector: 'app-liste-emp',
  template: '<input type="date" max="{{this.date}}">',
  templateUrl: './liste-emp.component.html',
  styleUrls: ['./liste-emp.component.css']
})
export class ListeEmpComponent implements OnInit {
  date!:String;
  employeForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private employeService: EmpolyeService
  ) { }
  employes: Employe[] = [];
  employes2: any [] = [];
  employe: any;
  submitted=false
  ngOnInit(): void {  
    // this.date = new Date().toISOString().slice(0, 10);
    // console.log("datedd",this.date)
    this.employeForm = this.formbuilder.group({
      _id:[''],
      cin:['', [ Validators.required, Validators.min(10000000),Validators.max(99999999)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_nais: ['', Validators.required],
      tel:['', [Validators.required, Validators.minLength(8)]],
      adresse : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
       salaire : ['', Validators.required],
      genre : ['', Validators.required],
      role : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordChangeDate:[],
      DeconnectionTime:[],
      images:[],
      __v:[],
    });  


    this.getb();
  }
  reset(e: any) {
  
    this.employeForm.setValue(e);
    
  }
  mise() {this.submitted=true
  if(this.employeForm.valid){
  
  
    
    this.employeService.updatdata(this.employeForm.value).subscribe(res => {
      this.getb()
      this.employeForm.reset();
    }) 
  }}
  delete() {
    console.log("eeeee",this.employeForm.value._id,this.employeForm.value.nom)
    this.employeService.deletedata(this.employeForm.value).subscribe(res => {
      this.getb()
    })
    
  } 
  getb() {
    
    this.employeService.getdata().subscribe((data) => {
      this.employes = data
      console.log(data);

    }); 
 
  }
  getbbyid(e : any) {
    
    this.employeService.getempbyid(e._id).subscribe((data) => {
      this.employes2 = data
      //  console.log("emp22é",this.employes2[2].images.url)
    
    });

  }
}


