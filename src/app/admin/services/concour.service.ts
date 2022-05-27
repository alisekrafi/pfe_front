import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcourService {

  constructor(private httpClient: HttpClient,) { }

  getdata(): Observable<any> {
    // const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/concour/all"
     
    
    return this.httpClient.get<any>(url);
  } 
  updatdata(f: any): Observable<any> { 
    // const headers = { 'token': sessionStorage.getItem('token')||""}
    return this.httpClient.put<any>("http://localhost:5000/concour/" + f._id, f)
  }
  // deletedata(f: any): Observable<any> {
  //   const headers = { 'token': sessionStorage.getItem('token')||""}
  //   return this.httpClient.delete<any>("http://localhost:5000/employe/" + f._id,{headers:headers})
  // }


} 
