import { Component, OnInit } from '@angular/core';
import { FlightsFunc1Model } from '../../..//models/flights/flights_func1_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';

@Component({
  selector: 'app-flights-page1',
  templateUrl: './flights-page1.component.html',
  styleUrls: ['./flights-page1.component.css']
})
export class FlightsPage1Component {

  constructor(private dataService: FlightsDataService) { }

  public isInitialized: boolean = false;
  public sortedArray: any[] = [];

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {ticks: {min: 11700}}}]}};
  
  public items: FlightsFunc1Model[] = [];

  initComponent()
  {
    if(!this.isInitialized)
    {
      this.getData();
      this.isInitialized = true;
    }   
  }

  getData()
  {
    this.showChart = false;   
    this.showSpinner = true;

    this.dataService.getTotalNumberOfFlightsPerMonth()
    .subscribe(response =>
      {
        this.items = this.parseResponse(response);
        this.loadItemsToBarChart(this.items);
        this.showSpinner = false;
        this.showChart = true;
      });
  }

  parseResponse(response: any)
  {
    const ITEMS: FlightsFunc1Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: FlightsFunc1Model = {        
        month: response[i].month,
        flights: response[i].flights
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToBarChart(items: any) 
  {
    const DATA_ARRAY: number[] = [];
    const LABEL_ARRAY: string[] = [];

    for(let i = 0; i < items.length; i++)
    {
      const DATA: number = items[i].flights;
      const LABEL: string = items[i].month;

      DATA_ARRAY.push(DATA);
      LABEL_ARRAY.push(LABEL);
    }

    this.barChartData = [{data: DATA_ARRAY, label: 'Total number of Flights'}];
    this.barChartLabels = LABEL_ARRAY;
  }
}
