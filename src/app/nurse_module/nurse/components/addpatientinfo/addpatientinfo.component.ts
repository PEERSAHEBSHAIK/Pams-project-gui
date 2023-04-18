import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Patient } from 'src/app/model_classes/Patient';
import { PatientInfoDetails } from 'src/app/model_classes/visit_details';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppsubService } from 'src/app/services/appsub.service';
import { PrevioushistoryComponent } from '../previoushistory/previoushistory.component';
import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-addpatientinfo',
  templateUrl: './addpatientinfo.component.html',
  styleUrls: ['./addpatientinfo.component.css']
})
export class AddpatientinfoComponent {
  constructor(
    public dialog: MatDialog,
    public patientService: AppointmentService,
    private shared: AppsubService
  ) { }
  // constructor(public patientData : AppointmentService){}

  toppings = new FormControl('');

  toppingList: string[] = [
    'Skin Allergy',
    'Eye Allergy',
    'Nose Allergy',
    'Food Allergy',
    'Dust Allergy',
  ];

  openDialog() {
    const dialogRef = this.dialog.open(PrevioushistoryComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  patientData: any;
  patient!: Patient;
  ngOnInit(): void {
    this.patientData = sessionStorage.getItem('arraydata');
    console.log('sdnsadnsnjsdsandasjknskjnaJKDJNSJDKASD  ' + this.patientData);
    this.patientService.getPatients(this.patientData).subscribe((data) => {
      this.patient = data;
    });

    this.shared.setMessage(this.patientDetails);
  }

  patientDetails: PatientInfoDetails = new PatientInfoDetails();
  onSubmit(data: any) {
    console.log(data);
    console.log(data.bloodPressure);
    this.patientDetails.patientId = this.patientData;
    this.patientDetails.height = data.height;
    this.patientDetails.weight = data.weight;
    this.patientDetails.bloodPressureSystolic = data.bloodPressureSystolic;
    this.patientDetails.bloodPressureDiastolic = data.bloodPressureDiastolic;
    this.patientDetails.bodyTemperature = data.bodyTemperature;
    this.patientDetails.respirationRate = data.RespirationRate;
    this.patientDetails.bloodGroup = '';
    this.patientDetails.nurseEmail = 'nurseemail1';
    this.patientDetails.physicianEmail = 'nurseemail1';
    this.patientDetails.appointmentId = '12';
    this.patientDetails.keyNotes = data.somethingData;
    this.patientDetails.allergyId = '1';



  }

  clickToSubmit() {
    this.dialog.open(SubmitDialogComponent, {
      width: '400px',
    });
  }
}
