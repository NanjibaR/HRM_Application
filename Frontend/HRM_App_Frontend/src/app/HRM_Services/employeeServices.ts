import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDTO} from '../HRM_Models/employeeDto';
import { DocummentDto} from '../HRM_Models/documentDto';
import { EmployeefamilyInfoDto} from '../HRM_Models/employeefamilyInfoDto';
import { EducationInfoDto} from '../HRM_Models/educationInfoDto';
import { EmployeeProfessionalCertificationDto} from '../HRM_Models/employeeProfessionalCertificationDto';
import { catchError, Observable, of } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private apiUrl = 'https://localhost:7035/api/employee';
    constructor(private http: HttpClient) {}


     getEmployees(idClient: number): Observable<EmployeeDTO[]> {
         return this.http.get<EmployeeDTO[]>(`${this.apiUrl}/?idClient=${idClient}`)
        //  .pipe(
        //   catchError(this.handleError)
        // );
     }

      getEmployeeById(idClient: number, id: number): Observable<EmployeeDTO[]> {
           const params = new HttpParams()
          .set('Idclient', idClient.toString())
          .set('id', id.toString());

          return this.http.get<EmployeeDTO[]>(`${this.apiUrl}/detail/{id}`, { params })
      }



      // getEmployeeImage(idClient: number, id: number): Observable<Blob> {
      //     const params = new HttpParams()
      //       .set('Idclient', idClient.toString())
      //       .set('id', id.toString());

      //     return this.http.get(`${this.apiUrl}/employeeimage`, {
      //       params,
      //       responseType: 'blob'
      //     })
          
      //     // .pipe(
      //     //   catchError(this.handleError)
      //     // );
      //   }
}