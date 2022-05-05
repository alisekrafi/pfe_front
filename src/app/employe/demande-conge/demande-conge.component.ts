import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Conge } from 'src/app/admin/modal/conge';
import { CongeService } from 'src/app/admin/services/conge.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html', 
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
  congeForm!: FormGroup;
  submitted=false;
 
  conges:Conge[]=[];
  tab=new Array();
  constructor(private formbuilder: FormBuilder,
    private http:HttpClient,private congeService:CongeService) { }

  ngOnInit(): void {
    this.congeForm= this.formbuilder.group({
      id: [''], 
      raison: [''], 
     date_debut: [''], 
      date_fin: [''], 
      id_emp:[13],
      response:[''],
     
  })
  this.getb();
 }
  getb() {
    
    this.congeService.getdata().subscribe((data) => {
      
      console.log(data);
      data.forEach((element:any) => {
        if(element.id_emp === 13)
        {this.conges.push(element)
        }
          
          
        });

    });
  } 
  reset(e: Conge) {
    console.log("eeeee",e);
   this.congeForm.setValue(e);
  }

  mise() {
    this.congeService.updatdata(this.congeForm.value).subscribe(res => {
      this.getb()
    })
  } 
  delete() {
    console.log("aaaaaaaa",this.congeForm.value.id)
    this.congeService.deletedata(this.congeForm.value.id).subscribe(res => {
    this.getb()
    })

  }

  submitconge(){
    
    
    if (this.congeForm.invalid) {
      
      console.log("ffffff",this.congeForm.controls   );

      
      return;
  }
  this.submitted = true;
  this.congeService.addConge(this.congeForm.value).subscribe((res:any)=>{
    this.getb();
      this.congeForm.reset();
      console.log("ajjj",this.congeForm.value);
      
      console.log("tab",this.tab);
      
    
      
    })}
 
}
