import { Component, OnInit } from '@angular/core';
import { FlightsFunc3Model } from '../../..//models/flights/flights_func3_model';
import { TopDestModel } from '../../..//models/misc/top_dest_model';
import { FlightsDataService } from '../../../services/data-service/flights-data.service';

//const BARCHART_LABELS: string[] = ['ATL','BOS','CLT', 'DCA', 'FLL', 'LAX', 'MCO', 'MIA', 'ORD', 'SFO'];

const DUMMY_BARCHART_DATA: any[] = [
  {data: [15632,18457,23415,19452,16305,15225,18002,23150,25630,17352], label: 'EWR'},
  {data: [18652,12365,18415,16452,21305,19225,22002,15150,20630,18552], label: 'JFK'},
  {data: [12632,15457,13415,23452,17305,null,15002,19150,16352,null], label: 'LGA'}
  ];



@Component({
  selector: 'app-flights-page3',
  templateUrl: './flights-page3.component.html',
  styleUrls: ['./flights-page3.component.css']
})
export class FlightsPage3Component {

  constructor(private dataService: FlightsDataService) { }

  public isInitialized: boolean = false;
  public tempArray1: any[] = [];
  public tempArray2: any[] = [];
  public tempArray3: any[] = [];

  showSpinner = true;
  showChart = false;

  public barChartData: any[] = DUMMY_BARCHART_DATA;
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = [];

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
    var GROUPED_ITEMS: any[] = [];
    GROUPED_ITEMS = this.groupBy(items, 'dest');
 
    //Get labels
    const BARCHART_LABELS: string[] = Object.keys(GROUPED_ITEMS);
    this.barChartLabels = BARCHART_LABELS;
    console.log(BARCHART_LABELS);

    //Get data for each origin
    const FLIGHTS_JFK_ARRAY: number[] = [];
    const FLIGHTS_LGA_ARRAY: number[] = [];
    const FLIGHTS_EWR_ARRAY: number[] = [];

    var counter: number = 0;

    //Check for non-existing origins key value pairs
    for(let i = 0; i < Object.keys(GROUPED_ITEMS).length; i++)
    {
        if(JSON.stringify(Object.values(GROUPED_ITEMS)[i]).indexOf('"origin":"LGA"') == -1)
        {
          Object.values(GROUPED_ITEMS)[i].push({"origin":"LGA","flights":0})
        }  
        
        if(JSON.stringify(Object.values(GROUPED_ITEMS)[i]).indexOf('"origin":"JFK"') == -1)
        {
          Object.values(GROUPED_ITEMS)[i].push({"origin":"JFK","flights":0})
        }  

        if(JSON.stringify(Object.values(GROUPED_ITEMS)[i]).indexOf('"origin":"EWR"') == -1)
        {
          Object.values(GROUPED_ITEMS)[i].push({"origin":"EWR","flights":0})
        }
    }    
    
    console.log(Object.values(GROUPED_ITEMS))

    const FL_ARR_EWR: number[] = []
    const FL_ARR_JFK: number[] = []
    const FL_ARR_LGA: number[] = []

    for(let i = 0; i < Object.keys(GROUPED_ITEMS).length; i++)
    {
      this.tempArray1 = [];  
      this.tempArray2 = [];  
      this.tempArray3 = [];  

      this.tempArray1.push(Object.values(GROUPED_ITEMS)[i]);
      FL_ARR_EWR.push(this.tempArray1[0][0].flights)  

      this.tempArray2.push(Object.values(GROUPED_ITEMS)[i]);
      FL_ARR_JFK.push(this.tempArray2[0][1].flights)    

      this.tempArray3.push(Object.values(GROUPED_ITEMS)[i]);
      FL_ARR_LGA.push(this.tempArray3[0][2].flights)    
    }

    console.log(FL_ARR_EWR);
    console.log(FL_ARR_JFK);
    console.log(FL_ARR_LGA);

    this.barChartData = [
      {data: FL_ARR_EWR, label: 'EWR'},
      {data: FL_ARR_JFK, label: 'JFK'},
      {data: FL_ARR_LGA, label: 'LGA'},
      ];   
    this.barChartLabels = BARCHART_LABELS;
  }

  insertWhereOriginEmpty(items: any[])
  {

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
}
