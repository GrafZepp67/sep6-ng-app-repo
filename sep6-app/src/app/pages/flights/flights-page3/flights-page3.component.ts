import { Component, OnInit } from '@angular/core';
import { FlightsFunc3Model } from '../../..//models/flights/flights_func3_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';

@Component({
  selector: 'app-flights-page3',
  templateUrl: './flights-page3.component.html',
  styleUrls: ['./flights-page3.component.css']
})
export class FlightsPage3Component {

  constructor(private dataService: FlightsDataService) { }

  public isInitialized: boolean = false;

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 11700}}]}};
  
  public items: FlightsFunc3Model[] = [];

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

    this.dataService.getTop10DestinationsAndNumberOfFlights()
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
    const ITEMS: FlightsFunc3Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: FlightsFunc3Model = {        
        origin: response[i].origin,
        dest: response[i].dest,
        flights: response[i].flights,
        total: response[i].total
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
      const LABEL: string = items[i].dest;

      DATA_ARRAY.push(DATA);
      LABEL_ARRAY.push(LABEL);
    }

    this.barChartData = [{data: DATA_ARRAY, label: 'Top destinations'}];
    this.barChartLabels = LABEL_ARRAY;
  }  
}
