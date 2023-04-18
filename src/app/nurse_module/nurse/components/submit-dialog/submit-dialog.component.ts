import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model_classes/Patient';
import { PatientInfoDetails } from 'src/app/model_classes/visit_details';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppsubService } from 'src/app/services/appsub.service';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.css']
})
export class SubmitDialogComponent {
  email: string = '';
  physicianAvail: any;
  deletePhysician: any;

  data: PatientInfoDetails = new PatientInfoDetails();
  constructor(
    private shared: AppsubService,
    private service: AppointmentService,
    private route: Router
  ) { }
  ngOnInit(): void {
    this.data = this.shared.getMessage();
    this.service.sendPatientInfo;
  }

  submit() {
    console.log('hlosriram');
    console.log(this.data);
    this.service.sendPatientInfo(this.data).subscribe();
    this.route.navigateByUrl('/appointments');
  }
}
