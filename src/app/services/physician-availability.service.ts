import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Physician } from '../model_classes/physician';

@Injectable({
  providedIn: 'root'
})
export class PhysicianAvailabilityService {
  physicianAvailability: string;
  putUrl: string;
  deleteUrl: string
  constructor(private http: HttpClient) {
    this.physicianAvailability = 'http://localhost:9006/api/v1/physician';
    this.putUrl = 'http://localhost:9006/api/v1/update-availability';
    this.deleteUrl = 'http://localhost:9006/api/v1/physician-available/';
  }
  public findAllAvailability(): Observable<Physician[]> {
    return this.http.get<Physician[]>(this.physicianAvailability);
  }
  public updateStartAndEndDate(available: Physician): Observable<Physician> {
    return this.http.put<Physician>(this.putUrl, available)
  }
  public deletePhysicianAvailabilityById(email: any) {
    return this.http.delete(this.deleteUrl + email);
  }
  public update(availability: Physician) {
    return this.http.put("http://localhost:9006/api/v1/update-status", availability);
  }
  public getCount() {
    return this.http.get("http://localhost:9006/api/v1/count");
  }
}
