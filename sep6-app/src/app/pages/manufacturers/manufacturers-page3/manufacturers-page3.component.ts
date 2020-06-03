import { Component } from '@angular/core';
import { ManFunc3Model } from '../../../models/manufacturers/man_func3_model';
import { ManufacturerDataService } from '../../../services/data-service/manufacturer-data.service';

@Component({
  selector: 'app-manufacturers-page3',
  templateUrl: './manufacturers-page3.component.html',
  styleUrls: ['./manufacturers-page3.component.css']
})
export class ManufacturersPage3Component {

  constructor(private _manufacturersDataService: ManufacturerDataService) { }

  public isInitialized: boolean = false;

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {title:{
    display: true,
    text:"The number of planes of each Airbus Model"
  },
  scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

  public items: ManFunc3Model[] = [];

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

    this._manufacturersDataService.getNumPlanesOfAirbusModel()
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
    const ITEMS: ManFunc3Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: ManFunc3Model = {        
        num_planes: response[i].num_planes,
        model: response[i].model
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
      const DATA: number = items[i].num_planes;
      const LABEL: string = items[i].model;

      DATA_ARRAY.push(DATA);
      LABEL_ARRAY.push(LABEL);
    }

    this.barChartData = [{data: DATA_ARRAY, label: 'Number of Planes'}];
    this.barChartLabels = LABEL_ARRAY;
  }
}