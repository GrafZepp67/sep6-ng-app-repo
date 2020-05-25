import { Component, OnInit } from '@angular/core';

const DUMMY_SCATTERCHART_DATA: any[] = [
  {x: 1, y: 23.375},
  {x: 2, y: 25.312},
  {x: 3, y: 26.312},
  {x: 4, y: 24.25},
  {x: 5, y: 23.45},
  {x: 6, y: 25.85},
  {x: 7, y: 24.65},
  {x: 8, y: 22.35},
  {x: 9, y: 21.15},
  {x: 10, y: 23.25}
];

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  constructor() { }

  public scatterChartData = { datasets: [{
    label: 'Scatter Dataset',
    data: [{
        x: -10,
        y: 0
    }, {
        x: 0,
        y: 10
    }, {
        x: 10,
        y: 5
    }]
}]};
  public scatterChartType = 'ScatterChart';
  public scatterChartLegend = true;
  public scatterChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {
    xAxes: [{ type: 'linear', position: 'bottom' }]
    }
  };

  ngOnInit(): void {
  }

}
