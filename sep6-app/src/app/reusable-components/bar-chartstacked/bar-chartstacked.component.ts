import { Component, OnInit } from '@angular/core';

const DUMMY_BARCHART_DATA: any[] = [
  {data: [15632,18457,23415,19452,16305,15225,18002,23150,25630,17352,16735,28630], label: 'EWR'},
  {data: [18652,12365,18415,16452,21305,19225,22002,15150,20630,18552,20735,21630], label: 'JFK'},
  {data: [12632,15457,13415,23452,17305,16225,15002,19150,17630,16352,13735,18630], label: 'LGA'}
  ];
const DUMMY_BARCHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

@Component({
  selector: 'app-bar-chartstacked',
  templateUrl: './bar-chartstacked.component.html',
  styleUrls: ['./bar-chartstacked.component.css']
})
export class BarChartstackedComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = DUMMY_BARCHART_DATA;
  public barChartLabels: string[] = DUMMY_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {
    xAxes: [{ stacked: true }], 
    yAxes: [{ stacked: true, ticks: {beginAtZero:true}}]
    }
  };

  ngOnInit(): void {
  }

}
