import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class ManufacturerDataService {

    constructor(private _http: HttpClient) {}

    //Function list here:

    //The manufacturers that have more than 200 planes
    getManufacturersWithMoreThan200Planes()
    {
        return this._http.get('https://manufacturers-endpoint-europe-do62tzdoqq-ew.a.run.app/man_func1');
    }

    //The number of flights each manufacturer with more than 200 planes are responsible for
    getNumFlightsForTopManufacturers()
    {
        return this._http.get('https://manufacturers-endpoint-europe-do62tzdoqq-ew.a.run.app/man_func2');
    }

    //The number of planes of each Airbus Model
    getNumPlanesOfAirbusModel()
    {
        return this._http.get('https://manufacturers-endpoint-europe-do62tzdoqq-ew.a.run.app/man_func3');
    }
}