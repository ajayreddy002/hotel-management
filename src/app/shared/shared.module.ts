import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatListModule, MatInputModule, MatButtonModule,
  MatIconModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatMenuModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
import { AttandenceChartComponent } from './components/attandence-chart/attandence-chart.component';
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
    MatTabsModule
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
    AttandenceChartComponent
  ]
})
export class SharedModule { }
