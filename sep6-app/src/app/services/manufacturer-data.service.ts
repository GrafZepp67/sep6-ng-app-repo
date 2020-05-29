import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class ManufacturerDataService {

    constructor(private _http: HttpClient) {

    }

    //Function list here:

    //The manufacturers that have more than 200 planes
    getManufacturersWithMoreThan200Planes()
    {
        return this._http.get('https://manufacturers-endpoint-do62tzdoqq-ew.a.run.app/man_func1?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //The number of flights each manufacturer with more than 200 planes are responsible for
    getNumFlightsForTopManufacturers()
    {
        return this._http.get('https://manufacturers-endpoint-do62tzdoqq-ew.a.run.app/man_func2?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }

    //The number of planes of each Airbus Model
    getNumPlanesOfAirbusModel()
    {
        return this._http.get('https://manufacturers-endpoint-do62tzdoqq-ew.a.run.app/man_func3?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }
}