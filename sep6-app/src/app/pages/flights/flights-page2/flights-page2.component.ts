import { Component, OnInit } from '@angular/core';
import { FlightsFunc2Model } from '../../..//models/flights/flights_func2_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';
import { MatRadioChange } from '@angular/material/radio';
import { Subject } from 'rxjs';

const ITEMS: FlightsFunc2Model[] = [];
const BARCHART_LABELS: string[] = ['January','February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-flights-page2',
  templateUrl: './flights-page2.component.html',
  styleUrls: ['./flights-page2.component.css']
})
export class FlightsPage2Component {

  constructor(private dataService: FlightsDataService) {}

  //Observer area start
  public selectedOption: string;
  public options: string[] = ['Frequency', 'Frequency stacked', 'Stacked Percentage'];

  public optionSubject = new Subject<any>();
  public optionSubject$ = this.optionSubject.asObservable();

  radioChange($event: MatRadioChange)
  {
    this.selectedOption = $event.value;
    this.updateTabSubject(this.selectedOption);

    this.loadItemsToBarChart(ITEMS,this.selectedOption);
  }

  public updateTabSubject(newActiveLink: any) 
  {
    this.optionSubject.next(newActiveLink);
  }

  public subscription = this.optionSubject$.subscribe((data: any) => 
  {    
    this.selectedOption = data;
  });

  //Observer area end

  public isInitialized: boolean = false;

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = [];
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = [];
  //public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 0}}]}};
  
  public items: FlightsFunc2Model[] = [];

  initComponent()
  {
    if(!this.isInitialized)
    {
      this.selectedOption = this.options[0];
      this.updateTabSubject(this.selectedOption);
      this.getData();
      this.isInitialized = true;
    }  
  }
  getData()
  {
    this.showChart = false;   
    this.showSpinner = true;

    this.dataService.getTotalNumberOfFlightsPerMonthFromThreeOrigins()
    .subscribe(response =>
      {
        this.items = this.parseResponse(response);
        this.loadItemsToBarChart(ITEMS, this.selectedOption);
        this.showSpinner = false;
        this.showChart = true;
      });
  }

  parseResponse(response: any)
  {
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

  loadItemsToBarChart(items: any, option: string) 
  {
    this.clearChart();

    switch(option)
    {
      case "Frequency":

        this.showFrequencyChart(items);

      break;

      case "Frequency stacked":

        this.showStackedFrequencyChart(items);

      break;

      case "Stacked Percentage":

        this.showStackedPercentageChart(items);

      break;
    }
  }  

  showFrequencyChart(items: any)
  {
    this.barChartOptions = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 0}}]}};

    const FREQ_FLIGHTS_JFK_ARRAY: number[] = [];
    const FREQ_FLIGHTS_LGA_ARRAY: number[] = [];
    const FREQ_FLIGHTS_EWR_ARRAY: number[] = [];

    for(let i = 0; i < items.length; i++)
    {
      if(items[i].origin == "JFK")
      {
        const FREQ_FLIGHTS_JFK: number = items[i].flights;
        FREQ_FLIGHTS_JFK_ARRAY.push(FREQ_FLIGHTS_JFK);
      }

      if(items[i].origin == "LGA")
      {
        const FREQ_FLIGHTS_LGA: number = items[i].flights;
        FREQ_FLIGHTS_LGA_ARRAY.push(FREQ_FLIGHTS_LGA);
      }

      if(items[i].origin == "EWR")
      {
        const FREQ_FLIGHTS_EWR: number = items[i].flights;
        FREQ_FLIGHTS_EWR_ARRAY.push(FREQ_FLIGHTS_EWR);
      }
    }

    this.barChartData = [
      {data: FREQ_FLIGHTS_JFK_ARRAY, label: 'JFK'},
      {data: FREQ_FLIGHTS_LGA_ARRAY, label: 'LGA'},
      {data: FREQ_FLIGHTS_EWR_ARRAY, label: 'EWR'},
      ];   
    this.barChartLabels = BARCHART_LABELS;
  }

  showStackedFrequencyChart(items: any)
  {
    this.barChartOptions = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {
      xAxes: [{ stacked: true }], 
      yAxes: [{ stacked: true, ticks: {beginAtZero:true}}]
      }
    };

    const FREQ_FLIGHTS_JFK_ARRAY: number[] = [];
    const FREQ_FLIGHTS_LGA_ARRAY: number[] = [];
    const FREQ_FLIGHTS_EWR_ARRAY: number[] = [];

    for(let i = 0; i < items.length; i++)
    {
      if(items[i].origin == "JFK")
      {
        const FREQ_FLIGHTS_JFK: number = items[i].flights;
        FREQ_FLIGHTS_JFK_ARRAY.push(FREQ_FLIGHTS_JFK);
      }

      if(items[i].origin == "LGA")
      {
        const FREQ_FLIGHTS_LGA: number = items[i].flights;
        FREQ_FLIGHTS_LGA_ARRAY.push(FREQ_FLIGHTS_LGA);
      }

      if(items[i].origin == "EWR")
      {
        const FREQ_FLIGHTS_EWR: number = items[i].flights;
        FREQ_FLIGHTS_EWR_ARRAY.push(FREQ_FLIGHTS_EWR);
      }
    }

    this.barChartData = [
      {data: FREQ_FLIGHTS_JFK_ARRAY, label: 'JFK'},
      {data: FREQ_FLIGHTS_LGA_ARRAY, label: 'LGA'},
      {data: FREQ_FLIGHTS_EWR_ARRAY, label: 'EWR'},
      ];   
    this.barChartLabels = BARCHART_LABELS;
  }

  showStackedPercentageChart(items: any)
  {
    this.barChartOptions = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {
      xAxes: [{ stacked: true }], 
      yAxes: [{ stacked: true, ticks: {beginAtZero:true}}]
      }
    };

    const PERCENTAGE_JFK_ARRAY: number[] = [];
    const PERCENTAGE_LGA_ARRAY: number[] = [];
    const PERCENTAGE_EWR_ARRAY: number[] = [];

    for(let i = 0; i < items.length; i++)
    {
      if(items[i].origin == "JFK")
      {
        const PERCENTAGE_JFK: number = items[i].percentage;
        PERCENTAGE_JFK_ARRAY.push(PERCENTAGE_JFK);
      }

      if(items[i].origin == "LGA")
      {
        const PERCENTAGE_LGA: number = items[i].percentage;
        PERCENTAGE_LGA_ARRAY.push(PERCENTAGE_LGA);
      }

      if(items[i].origin == "EWR")
      {
        const PERCENTAGE_EWR: number = items[i].percentage;
        PERCENTAGE_EWR_ARRAY.push(PERCENTAGE_EWR);
      }
    }

    this.barChartData = [
      {data: PERCENTAGE_JFK_ARRAY, label: 'JFK'},
      {data: PERCENTAGE_LGA_ARRAY, label: 'LGA'},
      {data: PERCENTAGE_EWR_ARRAY, label: 'EWR'},
      ];   
    this.barChartLabels = BARCHART_LABELS;
  }

  clearChart()
  {
    const EMPTY_DATA: number[] = [];
    this.barChartData = [
      {data: EMPTY_DATA, label: ''}];   
    this.barChartLabels = BARCHART_LABELS;
  }
}
