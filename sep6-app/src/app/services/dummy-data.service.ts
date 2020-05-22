import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class DummyDataService {

    constructor(private _http: HttpClient) {

    }

    getDummyData()
    {
        return this._http.get('https://us-central1-sep6s20.cloudfunctions.net/getDummyData');
    }
}