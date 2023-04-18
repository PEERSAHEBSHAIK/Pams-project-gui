import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDto } from '../model_classes/appointment';
import { Patient } from '../model_classes/Patient';

@Injectable({
  providedIn: 'root'
})
export class PhysicianserviceService {

  constructor(private http: HttpClient) { }

  public getAppointments(email: any, date: any, status: any): Observable<AppointmentDto[]> {
    return this.http.get<AppointmentDto[]>("http://localhost:9003/appointments/" + email + "/" + date + "/" + status)
  }

  // public getpatientsdetails() {
  //   return this.http.get("http://localhost:9012/api/v1/patient")
  // }
  public getpatientdetails(id: any): Observable<Patient> {
    return this.http.get<Patient>("http://localhost:9012/api/v1/patient/" + id)
  }

  // public updateStatus(id:any,status:an){
  //   return this.http.get("http://localhost:9003/api/v1/patient/"+id)
  // }
  // AppointmentHistory
  public getAppointmentsDetails(id: any, status: any) {
    return this.http.get("http://localhost:9003/patient/" + id + "/" + status)
  }
  // public getPatients(){
  //   return this.http.get("http://localhost:9002/appointments/sucess")
  // }
  public getPrescriptionDetails(id: any) {
    console.log("service Prescription " + id);

    return this.http.get("http://localhost:9005/getPrescription/" + id)
  }
  public postPrescription(prescription: any) {
    return this.http.post("http://localhost:9005/addPrescription", prescription)
  }
  public postTest(Test: any) {
    return this.http.post("http://localhost:9005/addTest", Test)
  }
  public getTests(Id: any) {
    return this.http.get("http://localhost:9005/getTest/" + Id)
  }

  public updateStatus(id: any, acceptance: any) {
    return this.http.put("http://localhost:9003/appointment/" + id + "/" + acceptance, "")
  }




  //  public getpatientdetail(status){
  //    return this.http.get("http://localhost:9002/getbystatus/"+status)
  //  }
}
