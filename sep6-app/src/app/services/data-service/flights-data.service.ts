import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class FlightsDataService {

    constructor(private _http: HttpClient) {

    }

    //Function list here
    //Total number of flights per month
    getTotalNumberOfFlightsPerMonth()
    {
        return this._http.get('https://flights-endpoint-do62tzdoqq-ew.a.run.app/flights_func1?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //Total number of flights per month from the three origins in one plot
    getTotalNumberOfFlightsPerMonthFromTHreeOrigins()
    {
        return this._http.get('https://flights-endpoint-do62tzdoqq-ew.a.run.app/flights_func2?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //The top-10 destinations and how many flights were made to these: o	For these 10 destinations, make a visualization of the number of flights from the three origins to the top-10 destination
    getTop10DestinationsAndNumberOfFlights()
    {
        return this._http.get('https://flights-endpoint-do62tzdoqq-ew.a.run.app/flights_func3?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //The mean airtime of each of the origins in a table
    getMeanAirtimeOfEachOfTheOrigins()
    {
        return this._http.get('https://flights-endpoint-do62tzdoqq-ew.a.run.app/flights_func4?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //Mean departure and arrival delay for each origin in a table
    getMeanDepAndArrDelayForEachOrigin()
    {
        return this._http.get('https://flights-endpoint-do62tzdoqq-ew.a.run.app/flights_func5?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }
}