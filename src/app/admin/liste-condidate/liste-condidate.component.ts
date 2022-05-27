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
  c!:Condidate;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private condidatservice: CondidatServiceService
  ) { }


  ngOnInit(): void {

  this.getb();
  }
 
  getb() {
    this.condidatservice.getdata().subscribe((data) => {
      this.condidates = data
      console.log(data);
 
    }); 

  }  
  reset(e: Condidate) {
    
   this.c=e;
   console.log("e",e);
   
  }
  delete() {
    
    console.log("c",this.c);
    this.condidatservice.deletedata(this.c).subscribe(res => {
    this.getb()
    })

  }

}


 