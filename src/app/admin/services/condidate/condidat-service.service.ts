import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CondidatServiceService {
  

    constructor(private httpClient: HttpClient, ) { }
    
    getdata(): Observable<any> {
      const url = "http://localhost:3000/condidate"
      return this.httpClient.get<any>(url);
    }
  }
