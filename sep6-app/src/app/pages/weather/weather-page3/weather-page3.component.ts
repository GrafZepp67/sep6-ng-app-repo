import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

import { WeatherFunc3Model } from '../../..//models/weather/weather_func3_model';
import { ScatterChartPoint } from '../../..//models/scatter_chart_point';
import { WeatherDataService } from '../../../services/weather-data.service';

const INIT_SCATTERCHART_DATA: any[] = [{x: 0, y: 0}];

@Component({
  selector: 'app-weather-page3',
  templateUrl: './weather-page3.component.html',
  styleUrls: ['./weather-page3.component.css']
})
export class WeatherPage3Component {

  constructor(private _weatherDataService: WeatherDataService) { }

  public isInitialized: boolean = false;

  showSpinner = true;  
  showChart = false;   

  public scatterChartType: ChartType = 'scatter';

  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: 
    {
      duration: 0
    }
  };

  //Initialize empty scatter chart
  public scatterChartData: ChartDataSets[] = [
    {
      data: INIT_SCATTERCHART_DATA, 
      label: 'EWR',
      pointRadius: 2,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'green',
      backgroundColor: 'green'
    },
    {
      data: INIT_SCATTERCHART_DATA, 
      label: 'JFK',
      pointRadius: 2,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'cyan',
      backgroundColor: 'cyan'
    },
    {
      data: INIT_SCATTERCHART_DATA, 
      label: 'LGA',
      pointRadius: 2,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'yellow',
      backgroundColor: 'yellow'
    },
  ];  

  public items: WeatherFunc3Model[] = [];

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
    this._weatherDataService.getTempInJFKinCelcius()
    .subscribe(response =>
      {
        this.items = this.parseResponse(response);
        this.loadItemsToScatterChart(this.items);
        this.showSpinner = false;
        this.showChart = true;
      });
  }

  parseResponse(response: any)
  {
    const ITEMS: WeatherFunc3Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: WeatherFunc3Model = {        
        time_epoch: response[i].time_epoch,
        jfk_temp: response[i].jfk_temp
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToScatterChart(items: any) 
  {
    const JFK_DATASET: ScatterChartPoint[] = []

    for(let i = 0; i < items.length; i++)
    {
      const DATA_POINT: ScatterChartPoint ={
        x: items[i].time_epoch,
        y: items[i].jfk_temp
      };

      JFK_DATASET.push(DATA_POINT);
    }

    this.scatterChartData = [
      {
        data: JFK_DATASET, //JFK x = epoch, y = temp
        label: 'JFK',
        pointRadius: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'red',
        backgroundColor: 'red'
      }
    ]
  }
}