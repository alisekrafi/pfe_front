import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private httpClient: HttpClient) { }
//  
headers = { 'token': sessionStorage.getItem('token')||""}
getdata(): Observable<any> {
  const url = "http://localhost:5000/conge/all"
  return this.httpClient.get<any>(url,{headers:this.headers});

}
getdatabyid(conge : any): Observable<any> {
  const url = "http://localhost:5000/conge/get/"+conge
  return this.httpClient.get<any>(url,{headers:this.headers});
} 
 
addConge(conge: any): Observable<any> {
  return this.httpClient.post<any>("http://localhost:3000/conge/add", conge);

} 
updatdata(f: any): Observable<any> {
  return this.httpClient.put<any>("http://localhost:3000/conge/" + f.id, f)
}
deletedata(f: any): Observable<any> {
  return this.httpClient.delete<any>("http://localhost:5000/employe/" + f,{headers:this.headers})
}
accepte(f: any): Observable<any> { 
  return this.httpClient.put<any>("http://localhost:5000/conge/confirm/" + f,{},{headers:this.headers})
}
refuse(f: any): Observable<any> { 
  return this.httpClient.put<any>("http://localhost:5000/conge/refuse/" + f,{},{headers:this.headers})
}
}
