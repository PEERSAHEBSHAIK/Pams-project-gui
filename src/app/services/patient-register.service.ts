import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model_classes/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientRegisterService {

  private registerUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:9012/api/v1/patient';
  }

  public findAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.registerUrl);
  }

}
