import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
}) 

export class AjoutEmployeComponent implements OnInit {
  employeForm!: FormGroup;
  // valid:boolean=false;
  constructor( private formbuilder: FormBuilder,
    private http:HttpClient,
    private toastrService: ToastrService
    
    ) { }
    submitted=false
    public isVisible: boolean = false
  ngOnInit(): void {
    this.employeForm = this.formbuilder.group({
      // id: [''], 
      cin:['', [ Validators.required, Validators.min(10000000)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_nais: ['', Validators.required],
      tel: ['',[ Validators.required, Validators.min(10000000),Validators.max(99999999)]],
      adresse: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
       salaire:  ['',[ Validators.required, Validators.min(480)]],
      genre: ['', Validators.required],
      role: ['', Validators.required],
      password: ['',[ Validators.required, Validators.minLength(6)]],
      
    })
    
  }
  get f() { return this.employeForm.controls; }
  headers = { 'token': sessionStorage.getItem('token')||""}

 


  submitEmploye(){
    
    this.submitted = true;
   
      

    this.http.post("http://localhost:5000/employe/add",this.employeForm.value,{headers:this.headers}).subscribe((res:any)=>{
      // this.valid=true;
      // console.log("ffffff",res.error)
      this.toastrService.success("L'employé a été ajouté avec succès!");
  
    

  }, err => {
    console.log("error!!!!!!",err.error.message)
    this.toastrService.error( "vérifier les données");
  })
  
 }

}
