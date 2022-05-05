import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})

export class AjoutEmployeComponent implements OnInit {
  employeForm!: FormGroup;
  valid:boolean=false;
  constructor( private formbuilder: FormBuilder,
    private http:HttpClient) { }
    submitted=false
    public isVisible: boolean = false
  ngOnInit(): void {
    this.employeForm = this.formbuilder.group({
      // id: [''], 
      cin:['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_nais: ['', Validators.required],
      tel: ['', Validators.required, Validators.minLength(3)],
      adresse: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
       salaire: ['', Validators.required],
      genre: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required,],
      
    })
  }
  get f() { return this.employeForm.controls; }
  headers = { 'token': sessionStorage.getItem('token')||""}

  showAlert() : void {
    if (this.isVisible) { 
      return; 
    }  
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,5000)
  }
  submitEmploye(){
    
    this.submitted = true;
    if (this.employeForm.invalid) {
      
      console.log("ffffff",this.employeForm.valid  );}
     
    // this.http.post("http://localhost:5000/employe/add",this.employeForm.value).subscribe((res:any)=>{
    this.http.post("http://localhost:5000/employe/add",this.employeForm.value,{headers:this.headers}).subscribe((res:any)=>{
      this.valid=true;
      console.log("ffffff",res)
    if(res=="empl est ajoutee"){
      this.showAlert() 
    }
     
    })  
    // this.employeForm.reset();

 }

}
