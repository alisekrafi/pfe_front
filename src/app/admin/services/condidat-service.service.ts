import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CondidatServiceService {
  

    constructor(private httpClient: HttpClient, ) { }
    headers = { 'token': sessionStorage.getItem('token')||""}
    getdata(): Observable<any> {
      const url = "http://localhost:5000/condidate/all"
      return this.httpClient.get<any>(url,{headers:this.headers});
    }
    sendmail(e: any): Observable<any> {
      return this.httpClient.post<any>("http://localhost:5000/condidate/mailer",e,{headers:this.headers});
    
    } 
    deletedata(f: any): Observable<any> {
      return this.httpClient.delete<any>("http://localhost:5000/employe/" + f._id,{headers:this.headers})
    }
  }
 