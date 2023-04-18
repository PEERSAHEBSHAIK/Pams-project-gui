import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PhysicianserviceService } from 'src/app/physician_service/physicianservice.service';
import { Patient } from 'src/app/model_classes/Patient';
import { AppointmentDto } from 'src/app/model_classes/appointment';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {
  app: AppointmentDto[] = []
  patientData: Patient[] = []


  status: String = "pending"
  @Input() receivedParentMessage: string = '';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  patientdetails: any;

  email: String = 'Aakash@123.com'
  constructor(private service: PhysicianserviceService) { }

  ngOnInit(): void {
    var date = new Date();
    var transformdate = this.currentDate.transform(date, 'dd-MMM-yyyy')
    // let resp1=this.service.getAppointments(this.email,transformdate,this.status);
    // resp1.subscribe((data: any)=>this.patientdetails=data);
    // console.log(transformdate+"this.today");


    this.service.getAppointments(this.email, transformdate, this.status).subscribe((data: AppointmentDto[]) => {
      console.log(data);
      this.app = data;
      for (let i = 0; i < this.app.length; i++) {
        console.log(this.app[i].patientId + 'inside data');
        this.service.getpatientdetails(this.app[i].patientId).subscribe((data1: Patient) => {
          this.patientData[i] = data1;
          console.log(data1.firstName);
          console.log(this.patientData[i].firstName);
        });
      }
    });
  }

  ngOnChanges() {
    var date = new Date();
    var transformdate = this.currentDate.transform(date, 'dd-MMM-yyyy')
    let resp1 = this.service.getAppointments(this.email, transformdate, this.status);
    resp1.subscribe((data: any) => this.patientdetails = data);
    console.log(transformdate + "this.today");
  }

  selectDate: any
  SelectBydate(SelectedDate: string) {
    console.log(SelectedDate)
    this.selectDate = SelectedDate

    const SelectByDate = this.currentDate.transform(this.selectDate, 'dd-MMM-yyyy');
    console.log(SelectByDate + "abcdefghi")

    this.service.getAppointments(this.email, SelectByDate, this.status).subscribe((data: AppointmentDto[]) => {
      console.log(data);
      this.app = data;
      for (let i = 0; i < this.app.length; i++) {
        console.log(this.app[i].patientId + 'inside data');
        this.service.getpatientdetails(this.app[i].patientId).subscribe((data1: Patient) => {
          this.patientData[i] = data1;
          console.log(data1.firstName);
          console.log(this.patientData[i].firstName);
        });
      }
    });
  }

  currentDate: DatePipe = new DatePipe('en-us');
  now: DatePipe = new DatePipe('en-us');
  tmrw: DatePipe = new DatePipe('en-us');
  id: any = null;
  tran: any;
  appointment: any = {};


  // patientId!: number;


  acceptAppointment(id: any) {
    this.service.updateStatus(id, "accepted").subscribe();
    console.log(id);
    this.ngOnInit();
  }

  rejectAppointment(id: any) {
    console.log(this.id)
    console.log(id)
    this.service.updateStatus(id, "rejected").subscribe();
    this.ngOnInit();

  }


  // acceptAppointment() {
  //   this.appointment.status = "Accepted";
  //   this.updateAppointment();
  // }

  // rejectAppointment() {
  //   this.appointment.status = "Rejected";
  //   this.updateAppointment();
  // }

  // updateAppointment() {
  //   this.http.put('/api/appointments/' + this.appointment.id, this.appointment)
  //     .subscribe((response) => {
  //       console.log(response);
  //     }, (error) => {
  //       console.error(error);
  //     });
  // }




  getCurrentDate(event: MatTabChangeEvent) {
    var date = new Date();
    var transformdate = this.currentDate.transform(date, 'dd-MMM-yyyy')
    const tab = event.tab.textLabel;
    if (tab == 'Today') {
      console.log(transformdate + "dsgsg");
      this.service.getAppointments(this.email, transformdate, this.status).subscribe((data: AppointmentDto[]) => {
        console.log(data);
        this.app = data;
        for (let i = 0; i < this.app.length; i++) {
          console.log(this.app[i].patientId + 'inside data');
          this.service.getpatientdetails(this.app[i].patientId).subscribe((data1: Patient) => {
            this.patientData[i] = data1;
            console.log(data1.firstName);
            console.log(this.patientData[i].firstName);
          });
        }
      });
      // return transformdate;
      // let resp1=this.service.getPatientAcceptDetails(this.today);
      // console.log(this.today);
      // resp1.subscribe((data: any)=>this.patientdetails=data);
    }
    else if (tab == 'Tommorrow') {
      var date = new Date();
      const transform = this.currentDate.transform(date, 'dd-MMM-yyyy');
      const tmrw = new Date(date.setDate(date.getDate() + 1));
      const tmm = this.tmrw.transform(tmrw, 'dd-MMM-yyyy');
      this.service.getAppointments(this.email, tmm, this.status).subscribe((data: AppointmentDto[]) => {
        console.log(data);
        this.app = data;
        for (let i = 0; i < this.app.length; i++) {
          console.log(this.app[i].patientId + 'inside data');
          this.service.getpatientdetails(this.app[i].patientId).subscribe((data1: Patient) => {
            this.patientData[i] = data1;
            console.log(data1.firstName);
            console.log(this.patientData[i].firstName);
          });
        }
      });
      // return transformdate;
    }
    else {
      return;
    }
  }

}
