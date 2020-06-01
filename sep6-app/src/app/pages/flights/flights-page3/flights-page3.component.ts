import { Component } from '@angular/core';
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
  public barChartOptions: any = {scaleShowVerticalLines: true, responsive: true, maintainAspectRatio: false, scales: {yAxes: [{ticks: {min: 0}}]}};

  public respItems: FlightsFunc3Model[] = [];
  public groupedItems: any[] = [];
  public fixedItems: any[] = [];

  public tempArray1: any[] = [];
  public tempArray2: any[] = [];
  public tempArray3: any[] = [];

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
        this.respItems = this.parseResponse(response);
        this.groupedItems = this.groupItems(this.respItems);
        this.setBarchartLabels(this.groupedItems);
        this.fixedItems = this.insertWhereOriginKeyValueEmpty(this.groupedItems);
        this.setBarchartData(this.fixedItems);
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

  insertWhereOriginKeyValueEmpty(items: any[])
  {
    for(let i = 0; i < Object.keys(items).length; i++)
    {
        if(JSON.stringify(Object.values(items)[i]).indexOf('"origin":"LGA"') == -1)
        {
          Object.values(items)[i].push({"origin":"LGA","flights":0})
        }  
        
        if(JSON.stringify(Object.values(items)[i]).indexOf('"origin":"JFK"') == -1)
        {
          Object.values(items)[i].push({"origin":"JFK","flights":0})
        }  

        if(JSON.stringify(Object.values(items)[i]).indexOf('"origin":"EWR"') == -1)
        {
          Object.values(items)[i].push({"origin":"EWR","flights":0})
        }
    }    
    return Object.values(items);
  }

  groupItems(items: any[])
  {
    items = this.groupBy(items, 'dest');
    return Object.values(items);
  }

  groupBy = (array: any[], key: string | number) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  filteredFlights = function (array: any[] ,search: string, keys: any[]) {
    var lowSearch = search.toLowerCase();
    return array.filter(function(flightNum){
        return keys.some( key => 
            String(flightNum[key]).toLowerCase().includes(lowSearch) 
        );
    });
  }

  setBarchartLabels(groupedItems: any[])
  {
    this.barChartLabels =  Object.keys(groupedItems);
  }

  setBarchartData(fixedItems: any[]) 
  {    
    const FLIGHTS_EWR_ARRAY: number[] = [];
    const FLIGHTS_JFK_ARRAY: number[] = [];
    const FLIGHTS_LGA_ARRAY: number[] = [];

    for(let i = 0; i < Object.keys(fixedItems).length; i++)
    {
      this.tempArray1 = [];  
      this.tempArray2 = [];  
      this.tempArray3 = [];  

      this.tempArray1.push(Object.values(fixedItems)[i]);
      FLIGHTS_EWR_ARRAY.push(this.tempArray1[0][0].flights)  

      this.tempArray2.push(Object.values(fixedItems)[i]);
      FLIGHTS_JFK_ARRAY.push(this.tempArray2[0][1].flights)    

      this.tempArray3.push(Object.values(fixedItems)[i]);
      FLIGHTS_LGA_ARRAY.push(this.tempArray3[0][2].flights)    
    }

    this.barChartData = [
      {data: FLIGHTS_EWR_ARRAY, label: 'EWR'},
      {data: FLIGHTS_JFK_ARRAY, label: 'JFK'},
      {data: FLIGHTS_LGA_ARRAY, label: 'LGA'},
      ];       
  }
}