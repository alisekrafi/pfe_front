import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/condidat"])
    }, 2000);
  }
 
}
