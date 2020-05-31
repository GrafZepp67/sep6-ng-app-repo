import { Component, OnInit } from '@angular/core';

const DUMMY_BARCHART_DATA: any[] = [{data: [15632,18457,23415,19452,16305,15225,18002,23150,25630,17352,16735,28630], label: 'Number of Flights'}];
const DUMMY_BARCHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const DATA: any[] = [];
const LABELS: string[] = [];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

  ngOnInit(): void 
  {
    this.loadChartData();
    this.loadChartLabels();
  }

  loadChartData()
  {
    this.barChartData = DUMMY_BARCHART_DATA;
  }

  loadChartLabels()
  {
     this.barChartLabels = DUMMY_BARCHART_LABELS;
  }

}
