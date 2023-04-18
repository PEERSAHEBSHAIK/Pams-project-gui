import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { TestdetailsComponent } from '../testdetails/testdetails.component';

@Component({
  selector: 'app-health-records',
  templateUrl: './health-records.component.html',
  styleUrls: ['./health-records.component.css']
})
export class HealthRecordsComponent {
  longtext = "dfdsfivdjkjiajkxnbdsvgyuwijklaxnbvgu";

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(TestdetailsComponent);
  }

  openDialog1() {
    const dialogRef = this.dialog.open(PrescriptionComponent);
  }
}
