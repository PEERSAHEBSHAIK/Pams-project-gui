import { Component } from '@angular/core';
import { AppointmentDto } from 'src/app/model_classes/appointment';
import { Patient } from 'src/app/model_classes/Patient';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  app: AppointmentDto[] = [];
  patientData: Patient[] = [];
  variable: any;
  constructor(public appointment: AppointmentService) { }
  ngOnInit(): void {
    this.appointment.getAppointments().subscribe((data: AppointmentDto[]) => {
      console.log(data);
      this.app = data;
      for (let i = 0; i < this.app.length; i++) {
        console.log(this.app[i].patientId + 'inside data');

        this.appointment
          .getPatients(this.app[i].patientId)
          .subscribe((data1: Patient) => {
            this.patientData[i] = data1;
            console.log(this.patientData[i]);
          });
      }
    });
  }
  particularPatient: any;

  id(data: any) {
    sessionStorage.setItem('arraydata', this.patientData[data].patientId);
    console.log(this.patientData[data].patientId);
  }
}
