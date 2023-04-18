import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDoctorsService } from 'src/app/patient_service/display-doctors.service';
import { Physician } from 'src/app/model_classes/physician';
import { DialogAppointmentComponent } from '../dialog-appointment/dialog-appointment.component';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent {
  physician: Physician[] = [];
  dataEmail: string = "";
  dataStartDate: string = "";
  dataEndDate: string = "";
  constructor(private dialog: MatDialog, private physicianService: DisplayDoctorsService) {

  }
  ngOnInit() {
    this.physicianService.findPhysician().subscribe(data => {
      this.physician = data;
    });
  }
  openDialog(value1: string, value2: string, value3: string) {
    this.dialog.open(DialogAppointmentComponent, { data: { dataEmail: value1, dataStartDate: value2, dataEndDate: value3 } });
  }
}
