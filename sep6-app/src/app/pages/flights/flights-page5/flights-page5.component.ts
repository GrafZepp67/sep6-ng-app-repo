import { Component } from '@angular/core';
import { FlightsFunc5Model } from '../../..//models/flights/flights_func5_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';

const BARCHART_LABELS: string[] = ['EWR','JFK','LGA'];

@Component({
  selector: 'app-flights-page5',
  templateUrl: './flights-page5.component.html',
  styleUrls: ['./flights-page5.component.css']
})
export class FlightsPage5Component {

  constructor(private dataService: FlightsDataService) { }

  public MULT_BARCHART_DATA: any[] = [];

  public isInitialized: boolean = false;

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: -0.1}}]} };
  
  public items: FlightsFunc5Model[] = [];

  
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

    this.dataService.getMeanDepAndArrDelayForEachOrigin()
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
    const ITEMS: FlightsFunc5Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: FlightsFunc5Model = {        
        meanDepartureDelay: response[i].meanDepartureDelay,
        meanArrivalDelay: response[i].meanArrivalDelay        
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToBarChart(items: any) 
  {
    const DATA_DEP_DELAY_ARRAY: number[] = [];
    const DATA_ARR_DELAY_ARRAY: number[] = [];

    for(let i = 0; i < items.length; i++)
    {
      const DATA_DEP_DELAY: number = items[i].meanDepartureDelay;
      const DATA_ARR_DELAY: number = items[i].meanArrivalDelay;
      
      DATA_DEP_DELAY_ARRAY.push(DATA_DEP_DELAY);
      DATA_ARR_DELAY_ARRAY.push(DATA_ARR_DELAY);
    }

    this.barChartData = [
      {data: DATA_DEP_DELAY_ARRAY, label: 'Mean Departure Delay'},
      {data: DATA_ARR_DELAY_ARRAY, label: 'Mean Arrival Delay'}
      ];   
    this.barChartLabels = BARCHART_LABELS;
  }  
}
