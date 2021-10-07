import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:8081/api/'; 

  constructor(private http:HttpClient) { }
  getEmployeesList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'employees');  
  }  

  
  createEmployee(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'employees', employee);  
  }  
  
  deleteemployee(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/employees/${id}`, { responseType: 'text' });  
  }  
  
  getemployee(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}employees/${id}`);  
  }  
  
  updateemployee(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}employees/${id}`, value);  
  }  
}
