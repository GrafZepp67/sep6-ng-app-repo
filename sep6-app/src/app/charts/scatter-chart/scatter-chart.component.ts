import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

const DUMMY_SCATTERCHART_DATA1: any[] = [
  {x: 1, y: 23.375},
  {x: 2, y: 25.312},
  {x: 3, y: 26.312},
  {x: 4, y: 24.25},
  {x: 5, y: 23.45},
  {x: 6, y: 25.85},
  {x: 7, y: 24.65},
  {x: 8, y: 22.35},
  {x: 9, y: 21.15},
  {x: 10, y: 24.25},
  {x: 11, y: 22.375},
  {x: 12, y: 23.312},
  {x: 13, y: 29.312},
  {x: 14, y: 27.25},
  {x: 15, y: 26.45},
  {x: 16, y: 25.85},
  {x: 17, y: 24.65},
  {x: 18, y: 26.35},
  {x: 19, y: 20.15},
  {x: 20, y: 26.25}
];

const DUMMY_SCATTERCHART_DATA2: any[] = [
  {x: 1, y: 23.475},
  {x: 2, y: 26.312},
  {x: 3, y: 26.212},
  {x: 4, y: 27.25},
  {x: 5, y: 22.45},
  {x: 6, y: 25.65},
  {x: 7, y: 25.65},
  {x: 8, y: 18.35},
  {x: 9, y: 20.95},
  {x: 10, y: 28.25},
  {x: 11, y: 22.25},
  {x: 12, y: 25.312},
  {x: 13, y: 26.312},
  {x: 14, y: 24.25},
  {x: 15, y: 23.45},
  {x: 16, y: 25.85},
  {x: 17, y: 24.65},
  {x: 18, y: 22.35},
  {x: 19, y: 21.15},
  {x: 20, y: 25.25}
];

const DUMMY_SCATTERCHART_DATA3: any[] = [
  {x: 1, y: 24.25},
  {x: 2, y: 23.45},
  {x: 3, y: 25.85},
  {x: 4, y: 24.65},
  {x: 5, y: 22.35},
  {x: 6, y: 21.15},
  {x: 7, y: 25.25},
  {x: 8,y: 28.375},
  {x: 9,y: 26.312},
  {x: 10,y: 22.312},
  {x: 11, y: 27.25},
  {x: 12, y: 21.45},
  {x: 13, y: 23.85},
  {x: 14, y: 26.312},
  {x: 15, y: 24.25},
  {x: 16, y: 23.45},
  {x: 17, y: 24.95},
  {x: 18, y: 22.45},
  {x: 19, y: 21.35},
  {x: 20, y: 25.25}
];

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  constructor() { }

  public scatterChartType: ChartType = 'scatter';

  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: DUMMY_SCATTERCHART_DATA1, 
      label: 'EWR',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'green',
      backgroundColor: 'green'
    },
    {
      data: DUMMY_SCATTERCHART_DATA2, 
      label: 'JFK',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'cyan',
      backgroundColor: 'cyan'
    },
    {
      data: DUMMY_SCATTERCHART_DATA3, 
      label: 'LGA',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'yellow',
      backgroundColor: 'yellow'
    },
  ];

  public scatterChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  ngOnInit(): void {
  }

}
