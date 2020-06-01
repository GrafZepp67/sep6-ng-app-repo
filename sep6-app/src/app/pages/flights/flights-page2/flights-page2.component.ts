import { Component, OnInit } from '@angular/core';
import { FlightsFunc2Model } from '../../..//models/flights/flights_func2_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';
import { RadioButtonsComponent } from '../../../reusable-components/radio-buttons/radio-buttons.component';

@Component({
  selector: 'app-flights-page2',
  templateUrl: './flights-page2.component.html',
  styleUrls: ['./flights-page2.component.css']
})
export class FlightsPage2Component implements OnInit{

  public selectedOption: any;

  constructor(private dataService: FlightsDataService, public radioButtons: RadioButtonsComponent) 
  { 
  }

  public isInitialized: boolean = false;

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 11700}}]}};
  
  public items: FlightsFunc2Model[] = [];

  ngOnInit(): void 
  {    
    this.radioButtons.optionSubject.subscribe((data => {
      console.log("Change caught!")
      this.selectedOption = data;
      console.log("Flights page 2 observed change in radio button option selection, selected tab : " + this.selectedOption);
    }))  
  }


  initComponent()
  {
    console.log("Flights page 2 initialized!")

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
    const ITEMS: FlightsFunc2Model[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: FlightsFunc2Model = {        
        month: response[i].month,
        origin: response[i].origin,
        flights: response[i].flights,
        percentage: response[i].percentage,
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

    this.barChartData = [{data: DATA_ARRAY, label: 'Total number of flights/month: JFK'}];
    this.barChartLabels = LABEL_ARRAY;
  }  
}
