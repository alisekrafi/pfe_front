import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeService { 

  constructor(private httpClient: HttpClient,) { }
  headers = { 'token': sessionStorage.getItem('token')||""}
  // getdata(): Observable<any> {
  //   const url = "http://localhost:3000/employe/all"
  //   return this.httpClient.get<any>(url,{headers:this.headers});
  // }
  getdata(): Observable<any> {
    console.log("header",this.headers);
    const url = "http://localhost:5000/employe/all"
    
    
    return this.httpClient.get<any>(url,{headers:this.headers});
  } 
  updatdata(f: any): Observable<any> { 
    return this.httpClient.put<any>("http://localhost:5000/employe/" + f._id, f,{headers:this.headers})
  }
  deletedata(f: any): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:5000/employe/" + f._id,{headers:this.headers})
  }
  getempbyid(e: any): Observable<any> {
    console.log("header",this.headers);
    const url = "http://localhost:5000/employe/" + e
    return this.httpClient.get<any>(url,{headers:this.headers});
  }
  // updatdata(f: any): Observable<any> { 
  //   return this.httpClient.put<any>("http://localhost:3000/employe/" + f.id, f)
  // }
  // deletedata(f: any): Observable<any> {
  //   return this.httpClient.delete<any>("http://localhost:3000/employe/" + f)
  // }
  // getempbyid(id: any): Observable<any> {
  //   const url = "http://localhost:3000/employe/" + id
  //   return this.httpClient.get<any>(url);
  // }
} 
