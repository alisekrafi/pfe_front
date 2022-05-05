import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MeetingService {
  headers = { 'token': sessionStorage.getItem('token')||""}
  constructor(private httpClient: HttpClient) { }
  getdata(): Observable<any> { 
    const url = "http://localhost:5000/reunion/all"
    return this.httpClient.get<any>(url,{headers:this.headers});
  }
  getdataid(id:any): Observable<any> {
    const url = "http://localhost:5000/reunion/"+id 
    return this.httpClient.get<any>(url,{headers:this.headers});
  }
  updatdata(f: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:5000/reunion/" + f.id, f,{headers:this.headers})
  }
  deletedata(f: any): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:5000/reunion/" + f,{headers:this.headers})
  }
  
 
} 
