import { Component, OnInit } from '@angular/core';
import { WeatherFunc1Model } from '../../..//models/weather/weather_func1_model';
import { WeatherDataService } from '../../../services/weather-data.service';

@Component({
  selector: 'app-weather-func1-barchart',
  templateUrl: './weather-func1-barchart.component.html',
  styleUrls: ['./weather-func1-barchart.component.css']
})
export class WeatherFunc1BarchartComponent implements OnInit {

  constructor(private _weatherDataService: WeatherDataService) { }

  showSpinner = true;  
  showChart = false;  

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 8700}}]}};
  
  public items: WeatherFunc1Model[] = [];

  ngOnInit() 
  {   
    console.log("Weather func1 component initialized!")

    this._weatherDataService.getNumberOfObservationsForTheOrigins()
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
    const ITEMS: WeatherFunc1Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: WeatherFunc1Model = {        
        origin: response[i].origin,
        numofobservations: response[i].numofobservations
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToBarChart(items: any) : void
  {
    const DATA_ARRAY: number[] = [];
    const LABEL_ARRAY: string[] = [];

    for(let i = 0; i < items.length; i++)
    {
      const DATA: number = items[i].numofobservations;
      const LABEL: string = items[i].origin;

      DATA_ARRAY.push(DATA);
      LABEL_ARRAY.push(LABEL);
    }

    this.barChartData = [{data: DATA_ARRAY, label: 'Number of Observations'}];
    this.barChartLabels = LABEL_ARRAY;
  }  
}