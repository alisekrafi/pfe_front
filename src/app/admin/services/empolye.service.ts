import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeService { 

  constructor(private httpClient: HttpClient,) { }
  
  // getdata(): Observable<any> {
  //   const url = "http://localhost:3000/employe/all"
  //   return this.httpClient.get<any>(url,{headers:this.headers});
  // }
  getdata(): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/employe/all"
    
    
    return this.httpClient.get<any>(url,{headers:headers});
  } 
  updatdata(f: any): Observable<any> { 
    const headers = { 'token': sessionStorage.getItem('token')||""}
    return this.httpClient.put<any>("http://localhost:5000/employe/" + f._id, f,{headers:headers})
  }
  deletedata(f: any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    return this.httpClient.delete<any>("http://localhost:5000/employe/" + f._id,{headers:headers})
  }
  getempbyid(e: any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/employe/" + e
    return this.httpClient.get<any>(url,{headers:headers});
  }
  count(): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/employe/count/all"
    return this.httpClient.get<any>(url,{headers:headers});
  
  }
} 
