import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addEmploye(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employee',data);
  }

  // get data

  getAllEmployee():Observable<any>{
    return this.http.get('http://localhost:3000/employee');
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }

  editEmployee(id:any,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employee/${id}`,data);
  }
}
