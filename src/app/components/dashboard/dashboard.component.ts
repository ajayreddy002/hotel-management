import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('attendanceChart', { static: true }) private attendanceChart: ElementRef;
  @ViewChild('gamesChart', { static: true }) private gamesChart: ElementRef;
  @ViewChild('resultsChart', { static: true }) private resultsChart: ElementRef;
  attedance: Chart;
  games: Chart;
  results: Chart;
  constructor() { }

  ngOnInit() {
    this.attedance = new Chart(this.attendanceChart.nativeElement, {
      type: 'bar',
      data: {
        datasets: [{
          data: [40, 50, 30, 20, 15, 25],
          label: 'Dataset 1',
          backgroundColor: [
            '#f56954',
            '#f39c12',
            '#3c8dbc'
          ],
        }],
        labels: ['04/19', '05/19', '06/19', '07/19', '08/18', '06/19']
      },
      options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
    });
    this.games = new Chart(this.gamesChart.nativeElement, {
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
    this.results = new Chart(this.resultsChart.nativeElement, {
      type: 'radar',
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
