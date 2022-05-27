import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CondidatServiceService {
  

    constructor(private httpClient: HttpClient, ) { }
    // headers = { 'token': sessionStorage.getItem('token')||""}
    getdata(): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      const url = "http://localhost:5000/condidate/all"
      return this.httpClient.get<any>(url,{headers:headers});
    }
    sendmailaccept(e: any): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      return this.httpClient.post<any>("http://localhost:5000/condidate/accepter",e,{headers:headers});
    
    } 
    sendmailrefuser(e: any): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      return this.httpClient.post<any>("http://localhost:5000/condidate/refuser",e,{headers:headers});
    
    } 
    getdatabyid(id:any): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      const url = "http://localhost:5000/condidate/"+id
      return this.httpClient.get<any>(url,{headers:headers});
    }
    count(): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      const url = "http://localhost:5000/condidate/count/all"
      return this.httpClient.get<any>(url,{headers:headers});
    
    }
    deletedata(f: any): Observable<any> {
      const headers = { 'token': sessionStorage.getItem('token')||""}
      return this.httpClient.delete<any>("http://localhost:5000/condidate/" + f._id,{headers:headers})
    }
    updatdata(id:any,f: any): Observable<any> { 
     
      return this.httpClient.put<any>("http://localhost:5000/condidate/" +id, f)
    }
  }
 