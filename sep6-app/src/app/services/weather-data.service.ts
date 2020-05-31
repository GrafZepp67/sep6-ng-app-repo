import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class WeatherDataService {

    constructor(private _http: HttpClient) {

    }

    //Function list here
    //How many weather observations there are for the origins in a table? - Barchart
    getNumberOfObservationsForTheOrigins()
    {
        return this._http.get('https://weather-endpoint-europe-do62tzdoqq-ew.a.run.app/weather_func1');
    }

    //For each of the three origins, all temperatures attributes in degree Celsius (need to be able to convert from Fahrenheit to Celsius) - Scatter chart 
    getAllTempAttributesInCelcius()
    {
        return this._http.get('https://weather-endpoint-europe-do62tzdoqq-ew.a.run.app/weather_func2');
    }

    //The temperature (in Celsius) at JFK - Scatter chart 
    getTempInJFKinCelcius()
    {
        return this._http.get('https://weather-endpoint-europe-do62tzdoqq-ew.a.run.app/weather_func3');
    }

    //The daily mean temperature (in Celsius) for each origin in the same plot - Scatter chart 
    getDailyMeanTempForEachOrigin()
    {
        return this._http.get('https://weather-endpoint-europe-do62tzdoqq-ew.a.run.app/weather_func4');
    }
}