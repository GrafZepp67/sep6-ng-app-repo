import { Component, OnInit } from '@angular/core';

const DUMMY_BARCHART_DATA: any[] = [{data: [15632,18457,23415,19452,16305,15225,14002,23150,25630,17352,16735,28630], label: 'Number of Flights'}];
const DUMMY_BARCHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = DUMMY_BARCHART_DATA;
  public barChartLabels: string[] = DUMMY_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {scaleShowVerticalLines: false, responsive: true };

  ngOnInit(): void {
  }

}
