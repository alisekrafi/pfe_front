import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeService {

  constructor(private httpClient: HttpClient, ) { }
  
  getdata(): Observable<any> {
    const url = "http://localhost:3000/employe"
    return this.httpClient.get<any>(url);
  }
  updatdata(f:any): Observable<any> {
    return this.httpClient.patch<any>("http://localhost:3000/employe/"+f.id,f)
  }
  deletedata(id:number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:3000/employe/"+id)
  }
}
