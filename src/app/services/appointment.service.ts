import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentDto } from '../model_classes/appointment';
import { Patient } from '../model_classes/Patient';
import { PatientInfoDetails } from '../model_classes/visit_details';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(public http: HttpClient) { }

  public getAppointments(): Observable<AppointmentDto[]> {
    return this.http.get<AppointmentDto[]>(
      'http://localhost:9006/appointment/accepted'
    );
  }
  public getPatients(variable: any): Observable<Patient> {
    return this.http.get<Patient>(
      'http://localhost:9003/api/v1/patient/' + variable
    );
  }

  public sendPatientInfo(patient: PatientInfoDetails) {
    console.log('in method post');

    console.log(patient);

    return this.http.post<PatientInfoDetails>(
      'http://localhost:9005/patient',
      patient
    );
  }
}
