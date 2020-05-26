import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class DummyDataService {

    constructor(private _http: HttpClient) {

    }

    getDummyData()
    {
        return this._http.get('https://manufacturers-endpoint-cloudrun-service-do62tzdoqq-ew.a.run.app/getDummyData?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }
}