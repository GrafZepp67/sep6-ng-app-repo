import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 

@Injectable()
export class DummyDataService {

    constructor(private _http: HttpClient) {

    }

    getDummyData()
    {
        return this._http.get('https://manufacturersapi-4z5zwd6dlq-ew.a.run.app/getAllStudents?key=AIzaSyCeSR2ZQNvqJX9kWdUjOLheNVZ-Z_S5i-A');
    }
}