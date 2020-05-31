import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

import { WeatherFunc4Model } from '../../..//models/weather/weather_func4_model';
import { WeatherDataService } from '../../../services/data-service/weather-data.service';
import { ScatterChartPoint } from '../../../models/misc/scatter_chart_point';

const INIT_SCATTERCHART_DATA: any[] = [{x: 0, y: 0}];

const JFK_DATASET: ScatterChartPoint[] = []
const EWR_DATASET: ScatterChartPoint[] = []
const LGA_DATASET: ScatterChartPoint[] = []

@Component({
  selector: 'app-weather-page4',
  templateUrl: './weather-page4.component.html',
  styleUrls: ['./weather-page4.component.css']
})
export class WeatherPage4Component {

  constructor(private _weatherDataService: WeatherDataService) { }

  public isInitialized: boolean = false;

  showSpinner = true;  
  showChart = false;   

  public scatterChartType: ChartType = 'scatter';

  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
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

  public items: WeatherFunc4Model[] = [];

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
    this._weatherDataService.getDailyMeanTempForEachOrigin()
    .subscribe(response =>
      {
        this.items = this.parseResponse(response);
        this.loadItemsToScatterChartDatasets(this.items);
        this.loadChartWithData();
        this.showSpinner = false;
        this.showChart = true;
      });
  }

  parseResponse(response: any)
  {
    const ITEMS: WeatherFunc4Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: WeatherFunc4Model = {        
        time_epoch: response[i].time_epoch,
        jfk_temp: response[i].jfk_temp,
        ewr_temp: response[i].ewr_temp,
        lga_temp: response[i].lga_temp
      };
      
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }

  loadItemsToScatterChartDatasets(items: any) 
  {
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
  }

  loadChartWithData()
  {
    this.scatterChartData = [
      {
        data: JFK_DATASET, //JFK x = epoch, y = temp
        label: 'JFK',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'red',
        backgroundColor: 'red'
      },
      {
        data: EWR_DATASET, //EWR x = epoch, y = temp
        label: 'EWR',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'green',
        backgroundColor: 'green'
      },
      {
        data: LGA_DATASET, //LGA x = epoch, y = temp
        label: 'LGA',
        pointRadius: 3,
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        pointBorderColor: 'yellow',
        backgroundColor: 'yellow'
      }
    ]
  }
}