import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL= "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })  
  }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.baseURL,JSON.stringify(employee),this.httpOptions);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+"/"+id);
  }

  updateEmployee(id:number, employee:Employee): Observable<Object>{
    return this.httpClient.put(this.baseURL+"/"+id, employee);
  }

  deleteEmployeeById(id: number): Observable<Object>{
    return this.httpClient.delete<Employee>(this.baseURL+"/"+id);
  }
}
