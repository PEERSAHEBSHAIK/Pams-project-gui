import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/patient_service/appointment';
import { AppointmentServiceService } from 'src/app/patient_service/appointment-service.service';
import { CustomDatePipePipe } from 'src/app/patient_service/custom-date-pipe.pipe';
import { BookappointmentComponent } from '../bookappointment/bookappointment.component';

@Component({
  selector: 'app-dialog-appointment',
  templateUrl: './dialog-appointment.component.html',
  styleUrls: ['./dialog-appointment.component.css']
})
export class DialogAppointmentComponent {
  hide = true;
  minDate: Date;
  maxDate: Date;

  constructor(private appointmentService: AppointmentServiceService, private router: Router, private appointment: Appointment, private dialogRef: MatDialogRef<BookappointmentComponent>, @Inject(MAT_DIALOG_DATA) public data: BookappointmentComponent) {
    this.minDate = new Date(this.data.dataStartDate);
    this.maxDate = new Date(this.data.dataEndDate);
  }
  onSubmit(value: any): void {
    this.appointment.acceptance = "pending";
    this.appointment.date = new CustomDatePipePipe('en-us').transform(value.date, 'dd-MMM-yyyy');
    this.appointment.reason = value.reason;
    this.appointment.physcianEmail = this.data.dataEmail;
    this.appointment.patientId;
    this.appointment.submissionDate = new CustomDatePipePipe('en-us').transform(new Date(), 'dd-MMM-yyyy');
    console.log(this.appointment);
    this.appointmentService.appointments(this.appointment).subscribe(result => {
      console.log(result);
      this.gotoPrevious();
    });
  }
  gotoPrevious() {
    this.closeDialog();
    this.router.navigate(['/patient/bookappointment']);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
