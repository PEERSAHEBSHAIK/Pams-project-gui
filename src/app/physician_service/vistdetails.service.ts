import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VistdetailsService {

  constructor(private http: HttpClient) { }
  public getvisitDetails(id: any) {
    return this.http.get("http://localhost:9005/patient/" + id)
  }
}
