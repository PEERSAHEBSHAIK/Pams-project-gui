import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { HealthRecordsComponent } from './components/health-records/health-records.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegiComponent } from './components/patient-regi/patient-regi.component';
import { PatienthomeComponent } from './components/patienthome/patienthome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestdetailsComponent } from './components/testdetails/testdetails.component';

const routes: Routes = [
  {
    path: "", component: SidebarComponent, children: [
      {
        path: "home", component: PatienthomeComponent
      },
      {
        path: "", redirectTo: "/patient/home", pathMatch: "full"
      },
      {
        path: "bookappointment", component: BookappointmentComponent
      },
      {
        path: "health-records", component: HealthRecordsComponent
      },
      {
        path: "testdetails", component: TestdetailsComponent
      },
      {
        path: "login", component: LoginComponent
      },
      {
        path: "profile", component: ProfileComponent
      },
      {
        path: "register", component: PatientRegiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
