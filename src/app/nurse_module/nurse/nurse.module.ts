import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AddpatientinfoComponent } from './components/addpatientinfo/addpatientinfo.component';
import { IndexpageComponent } from './components/indexpage/indexpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrevioushistoryComponent } from './components/previoushistory/previoushistory.component';
import { SubmitDialogComponent } from './components/submit-dialog/submit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AddpatientinfoComponent,
    IndexpageComponent,
    NavbarComponent,
    PrevioushistoryComponent,
    SubmitDialogComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule,
  ]
})
export class NurseModule { }