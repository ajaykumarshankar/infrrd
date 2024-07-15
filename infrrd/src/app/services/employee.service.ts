import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee, IEmployees } from '../models/employee.model';
import { enviroment } from './enviroments/enviroment.local';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  endpoint = enviroment.baseUrl;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
      const endPoint = `${this.endpoint}/employees`;
      return this.http.get<IEmployee[]>(endPoint, {})
  }
}
