import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Conge } from '../modal/conge';
import { CongeService } from '../services/conge.service';
import { EmpolyeService } from '../services/empolye.service';

@Component({
  selector: 'app-reponse-conge',
  templateUrl: './reponse-conge.component.html',
  styleUrls: ['./reponse-conge.component.css']
})
export class ReponseCongeComponent implements OnInit {
id!:any;
tab=new Array();
congeForm!: FormGroup;
  constructor(private route: ActivatedRoute,   private formbuilder: FormBuilder, private CongeService: CongeService,private employeService: EmpolyeService) { }

  ngOnInit(): void {
    this.congeForm = this.formbuilder.group({
      _id:[''],
       titre: [''], 
      sujet: [''], 
       date: [''], 
       __v:[],
      
   })


    this.id=this.route.snapshot.paramMap.get('id');
    console.log("id",this.id);
    this.getconge()
  }


  getconge() { 
   
    this.CongeService.getdatabyid(this.id).subscribe((data) => {
     console.log("status",data[0].status);
     
     
        this.employeService.getempbyid( data[0].id_emp).subscribe((res) => {
         
          this.tab.push(data[0]._id,data[0].date_debut,data[0].date_fin,data[0].date_dem,res[0]._id,data[0].raison,res[0].nom,res[0].prenom,res[0].images.url,res[0].role)

          
        });
      })
     
    }
    accepte(){
      this.CongeService.accepte(this.id).subscribe((res) => {
      console.log("accepted conge");
      
      })
    }
    Refuser(){
      this.CongeService.refuse(this.id).subscribe((res) => {
      console.log("conge refuser");
      
      })
    }
}
