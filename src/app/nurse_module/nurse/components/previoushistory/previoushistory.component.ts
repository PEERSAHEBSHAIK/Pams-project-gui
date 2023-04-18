import { Component } from '@angular/core';



@Component({
  selector: 'app-previoushistory',
  templateUrl: './previoushistory.component.html',
  styleUrls: ['./previoushistory.component.css']
})
export class PrevioushistoryComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['AppointmentDate', 'PhysicianName'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: null;
}


export interface PeriodicElement {
  AppointmentDate: string;
  PhysicianName: string;
  ActualResult: string;
  Status: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        aatomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    AppointmentDate: '12/03/2021',
    PhysicianName: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
];
