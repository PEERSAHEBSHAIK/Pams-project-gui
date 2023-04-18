import { Component } from '@angular/core';
import { PhysicianserviceService } from 'src/app/physician_service/physicianservice.service';
import { VistdetailsService } from 'src/app/physician_service/vistdetails.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent {
  showContent = false;

  prescription: any

  toggleContent() {
    this.showContent = !this.showContent;
  }
  panelOpenState = false;
  status: String = "accept";
  id: any

  // let resp1=this.service.getAppointments(this.email,transformdate,this.status);
  // resp1.subscribe((data: any)=>this.patientdetails=data);
  patientdetail: any
  patientVisitdetail: any
  Vistdetails: any
  prescriptions: any[] = [];
  PatientsTests: any[] = [];
  appointmentsHistory: any = []
  visitID: any
  constructor(
    private patientdetails: PhysicianserviceService,
    private patientvist: VistdetailsService,
  ) { }


  ngOnInit(): void {
    const pId = sessionStorage.getItem('Pid')
    const Aid = sessionStorage.getItem('AppointmentId')
    console.log(pId + "session value1")
    console.log(Aid + "Appoinment id")
    const details = this.patientdetails.getpatientdetails(sessionStorage.getItem('Pid'))
    details.subscribe((data) => this.patientdetail = data)
    const Vistdetails = this.patientvist.getvisitDetails(sessionStorage.getItem('Pid'))
    Vistdetails.subscribe((data) => {
      this.patientVisitdetail = data
      this.visitID = this.patientVisitdetail.visitId;
      console.log(this.visitID + "cdcdc");

      sessionStorage.setItem("VisitId", this.patientVisitdetail.visitId)
    })
    console.log(sessionStorage.getItem('VisitId') + 'visdeid');

    const appointmentHistory = this.patientdetails.getAppointmentsDetails(sessionStorage.getItem('Pid'), this.status)
    appointmentHistory.subscribe((data) => {
      this.appointmentsHistory = data;
      for (let i = 0; i < this.appointmentsHistory.length; i++) {
        this.patientdetails.getPrescriptionDetails(this.appointmentsHistory[i].id).subscribe((data) => {
          this.prescriptions[i] = data
        });
        this.patientdetails.getTests(this.appointmentsHistory[i].id).subscribe((data) => {
          this.PatientsTests[i] = data
        });
      }
    })


    // for (let i = 0; i < this.app.length; i++) {
    //   console.log(this.app[i].patientId + 'inside data');
    //   this.service.getpatientdetails(this.app[i].patientId).subscribe((data1: PatientDetails) => {
    //       this.patientData[i] = data1;
    //       console.log(this.patientData[i]);
    //     });
    // }



    //  const prescriptionDetails=this.patientvist.getPrescriptionDetails(sessionStorage.getItem('VisitId'));
    //  prescriptionDetails.subscribe((data)=>{this.prescriptions=data});
    //  console.log(this.prescriptions+"dfgdfge");
    //  console.log(this.prescriptions[0]+"prescription")
  }

  // ngAfterViewInit(): void {
  //   const pId=sessionStorage.getItem('Pid')
  //     console.log(pId+"session value2")

  //  const details=this.patientdetails.getpatientdetails(sessionStorage.getItem('Pid'))
  //  details.subscribe((data)=>this.patientdetail=data)
  //  const Vistdetails=this.patientvist.getvisitDetails(sessionStorage.getItem('Pid'))
  //  Vistdetails.subscribe((data)=>{
  //   console.log("inside ngAfterViewInit")
  //   console.log(data)
  //   this.patientVisitdetail=data
  //   this.visitID=this.patientVisitdetail.visitId;
  //   console.log(this.visitID+"cdcdc");

  // sessionStorage.setItem("VisitId",this.patientVisitdetail.visitId)
  // })

  // const prescriptionDetails=this.patientvist.getPrescriptionDetails(this.visitID);
  // prescriptionDetails.subscribe((data)=>{this.prescriptions=data});
  // console.log(this.prescriptions.prescriptionName+"prescription")
  // console.log("prcecption");


  //  }
  medicines: any[] = [];
  newMedicine: any = { prescriptionName: '', dosage: '', prescriptionNotes: '', visitId: '' };

  addMedicine() {
    console.log(this.newMedicine + "addmedicine")
    this.medicines.push(this.newMedicine);
    this.newMedicine.visitId = this.visitID;
    this.newMedicine = { prescriptionName: '', dosage: '', prescriptionNotes: '' };
  }

  removeMedicine(medicine: any) {
    this.medicines = this.medicines.filter(m => m !== medicine);
  }


  Tests: any[] = [];
  newTest: any = { testName: '', testNotes: '', result: '', visitId: '' };

  addTest() {
    console.log(this.Tests)
    this.Tests.push(this.newTest);
    this.newTest.visitId = this.visitID;
    this.newTest = { testName: '', testNotes: '', result: '' };
  }

  removeTest(test: any) {
    this.Tests = this.Tests.filter(m => m !== test);
  }

  medicinesubmit(value: any) {
    this.medicines.push(value);
    this.newMedicine.visitId = this.visitID;
    // this.patientdetails.postPrescription(this.medicines).subscribe()
    this.removeMedicine(value);
    this.medicines = [];
    this.newMedicine = { prescriptionName: '', dosage: '', prescriptionNotes: '', visitId: '' };
    console.log(this.medicines);
    console.log("abc");
  }

  testsubmit(testss: any) {
    this.Tests.push(testss);
    this.newTest.visitId = this.visitID;
    this.patientdetails.postTest(this.Tests).subscribe()
    console.log(this.Tests);
    this.removeTest(testss);
    this.Tests = [];
    this.newTest = { testName: '', testNotes: '', result: '' };
  }
}
