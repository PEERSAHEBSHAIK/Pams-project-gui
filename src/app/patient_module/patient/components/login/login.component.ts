import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/patient_service/login.service';
import { Patient } from 'src/app/patient_service/Patient';
import { PatientRegisterService } from 'src/app/patient_service/patient-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
  showError: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'you must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  patients: Patient[] = [];
  constructor(private patientRegister: PatientRegisterService, private loginservice: LoginService, private patient: Patient, private router: Router) { }
  ngOnInit() {
    this.patientRegister.getPatients().subscribe(data => {
      this.patients = data;
    });
  }
  hide = true;
  onSubmit(value: any): void {
    if (this.loginservice.loginPatient(value.email, value.password)) {
      this.router.navigate(['/patient']);
    }
    else {
      this.showError = true;
    }
  }
}
