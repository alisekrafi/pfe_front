import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private httpClient: HttpClient) { }
//  
// headers = { 'token': sessionStorage.getItem('token')||""}
getdata(): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  const url = "http://localhost:5000/conge/all"
  return this.httpClient.get<any>(url,{headers:headers});

}

getdatabyid(conge : any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  const url = "http://localhost:5000/conge/get/"+conge
  return this.httpClient.get<any>(url,{headers:headers});
} 
getdatabyidemp(conge : any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  const url = "http://localhost:5000/conge/"+conge
  return this.httpClient.get<any>(url,{headers:headers});
} 
addConge(conge: any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  return this.httpClient.post<any>("http://localhost:5000/conge/add/", conge,{headers:headers});
 
} 
updatdata(f: any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  return this.httpClient.put<any>("http://localhost:5000/conge/set/" + f._id, f,{headers:headers})
}
deletedata(f: any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  return this.httpClient.delete<any>("http://localhost:5000/conge/" + f,{headers:headers})
}
accepte(f: any): Observable<any> { 
  const headers = { 'token': sessionStorage.getItem('token')||""}
  return this.httpClient.put<any>("http://localhost:5000/conge/confirm/" +f,{},{headers:headers})
}
refuse(f: any,r:any): Observable<any> { 
  const headers = { 'token': sessionStorage.getItem('token')||""}
  return this.httpClient.put<any>("http://localhost:5000/conge/refuse/" + f,r,{headers:headers})
}

count(id:any): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  const url = "http://localhost:5000/conge/count/emp/"+id
  return this.httpClient.get<any>(url,{headers:headers});

}
countr(): Observable<any> {
  const headers = { 'token': sessionStorage.getItem('token')||""}
  const url = "http://localhost:5000/conge/count"
  return this.httpClient.get<any>(url,{headers:headers});

}





}

