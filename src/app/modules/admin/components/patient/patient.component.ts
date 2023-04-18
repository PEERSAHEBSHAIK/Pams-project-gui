import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Patient } from 'src/app/model_classes/Patient';
import { PatientRegisterService } from 'src/app/services/patient-register.service';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientArr: Patient[] = [];
  dataSource: any;
  displayedColumns = ['ID', 'title', 'name', 'email', 'gender'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private patientService: PatientRegisterService) { }
  ngOnInit() {
    this.patientService.findAllPatient().subscribe(data => {
      this.patientArr = data;
      console.log(this.patientArr);
      this.dataSource = new MatTableDataSource<Patient>(this.patientArr);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
