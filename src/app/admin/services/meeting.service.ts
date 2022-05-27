import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MeetingService {
  // headers = { 'token': sessionStorage.getItem('token')||""}
  constructor(private httpClient: HttpClient) { }
  getdata(): Observable<any> { 
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/reunion/all"
    return this.httpClient.get<any>(url,{headers:headers});
  }
  getdataid(id:any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/reunion/"+id 
    return this.httpClient.get<any>(url,{headers:headers});
  }
  updatdata(f: any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    return this.httpClient.put<any>("http://localhost:5000/reunion/" + f._id, f,{headers:headers})
  }
  deletedata(f: any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    return this.httpClient.delete<any>("http://localhost:5000/reunion/" + f,{headers:headers})
  }
  count(d:any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/reunion/count/all/"+d
    return this.httpClient.get<any>(url,{headers:headers});
  
  }
  countid(d:any,a:any): Observable<any> {
    const headers = { 'token': sessionStorage.getItem('token')||""}
    const url = "http://localhost:5000/reunion/count/id/"+d+"/"+a
    return this.httpClient.get<any>(url,{headers:headers});
  
  }
} 
