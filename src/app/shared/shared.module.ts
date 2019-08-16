import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatListModule, MatInputModule, MatButtonModule,
  MatIconModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatMenuModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';
import { AttandenceChartComponent } from './components/attandence-chart/attandence-chart.component';
import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
  declarations: [AttandenceChartComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    FullCalendarModule,
    MatDialogModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    AttandenceChartComponent,
    FullCalendarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
