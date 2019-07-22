import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-attandence-chart',
  templateUrl: './attandence-chart.component.html',
  styleUrls: ['./attandence-chart.component.scss']
})
export class AttandenceChartComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: HTMLElement;
  @ViewChild('attendanceChart', { static: true }) private attendanceChart: ElementRef;
  attedance: Chart;
  constructor() { }

  ngOnInit() {
    this.attedance = new Chart(this.attendanceChart.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20, 30],
          label: 'Dataset 1',
          backgroundColor: [
            '#f56954',
            '#f39c12',
            '#3c8dbc'
          ],
        }],
        labels: ['New Users', 'Visted users', 'Regular']
      }
    });
  }
  ngAfterViewInit() {
    this.attedance = new Chart(this.attendanceChart.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20, 30],
          label: 'Dataset 1',
          backgroundColor: [
            '#f56954',
            '#f39c12',
            '#3c8dbc'
          ],
        }],
        labels: ['New Users', 'Visted users', 'Regular']
      }
    });
  }
}
