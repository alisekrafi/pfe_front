import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class AnnonceService {
  headers = { 'token': sessionStorage.getItem('token')||""}
  constructor(private httpClient: HttpClient) { }
  getdata(): Observable<any> {
    const url = "http://localhost:5000/annonce/all"
    return this.httpClient.get<any>(url,{headers:this.headers});
  }
  updatdata(f: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:5000/annonce/" + f._id, f,{headers:this.headers})
  }
  deletedata(f: any): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:5000/annonce/" + f,{headers:this.headers})
  }

  count(): Observable<any> {
    const url = "http://localhost:5000/annonce/count/all"
    return this.httpClient.get<any>(url,{headers:this.headers});
  
  }
  
} 
