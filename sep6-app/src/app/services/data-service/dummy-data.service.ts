import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import fetch from "node-fetch";

@Injectable()
export class DummyDataService {

    constructor(private _http: HttpClient) {

    }

    getDummyDataPromise()
    {
        const promise = fetch('https://manufacturers-endpoint-do62tzdoqq-ew.a.run.app/getDummyData?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');

        promise
        .then(res => res.json())

        return promise;
    }

    getDummyData()
    {
        return this._http.get('https://manufacturers-endpoint-do62tzdoqq-ew.a.run.app/getDummyData?key=AIzaSyB98vsc9EId-Y0hLGjdGSRqZqUARc2E77c');
    }
}