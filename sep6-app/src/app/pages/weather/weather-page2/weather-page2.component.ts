import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

import { WeatherFunc2Model } from '../../..//models/weather/weather_func2_model';
import { WeatherDataService } from '../../../services/weather-data.service';
import { ScatterChartPoint } from '../../..//models/scatter_chart_point';

const INIT_SCATTERCHART_DATA: any[] = [{x: 0, y: 0}];

@Component({
  selector: 'app-weather-page2',
  templateUrl: './weather-page2.component.html',
  styleUrls: ['./weather-page2.component.css']
})
export class WeatherPage2Component {

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
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'green',
      backgroundColor: 'green'
    },
    {
      data: INIT_SCATTERCHART_DATA, 
      label: 'JFK',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'cyan',
      backgroundColor: 'cyan'
    },
    {
      data: INIT_SCATTERCHART_DATA, 
      label: 'LGA',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'yellow',
      backgroundColor: 'yellow'
    },
  ];

  public items: WeatherFunc2Model[] = [];

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
    this._weatherDataService.getAllTempAttributesInCelcius()
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
    const ITEMS: WeatherFunc2Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: WeatherFunc2Model = {        
        time_epoch: response[i].time_epoch,
        jfk_temp: response[i].jfk_temp,
        ewr_temp: response[i].ewr_temp,
        lga_temp: response[i].lga_temp,
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToScatterChart(items: any) : void
  {
    const JFK_DATASET: ScatterChartPoint[] = []
    const EWR_DATASET: ScatterChartPoint[] = []
    const LGA_DATASET: ScatterChartPoint[] = []

    for(let i = 0; i < items.length; i++)
    {
      const DATA_POINT_JFK: ScatterChartPoint ={
        x: items[i].time_epoch,
        y: items[i].jfk_temp
      };
      JFK_DATASET.push(DATA_POINT_JFK);

      const DATA_POINT_EWR: ScatterChartPoint ={
        x: items[i].time_epoch,
        y: items[i].ewr_temp
      };
      EWR_DATASET.push(DATA_POINT_EWR);

      const DATA_POINT_LGA: ScatterChartPoint ={
        x: items[i].time_epoch,
        y: items[i].lga_temp
      };
      LGA_DATASET.push(DATA_POINT_LGA);
    }

    this.scatterChartData = [
      {
        data: JFK_DATASET, //JFK x = epoch, y = temp
        label: 'JFK',
        pointRadius: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'red',
        backgroundColor: 'red'
      },
      {
        data: EWR_DATASET, //EWR x = epoch, y = temp
        label: 'EWR',
        pointRadius: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'green',
        backgroundColor: 'green'
      },
      {
        data: LGA_DATASET, //LGA x = epoch, y = temp
        label: 'LGA',
        pointRadius: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'yellow',
        backgroundColor: 'yellow'
      }
    ]
  }
}
