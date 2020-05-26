import { Component, OnInit } from '@angular/core';
import { Dummy } from '../../../models/dummy';
import { DummyDataService } from '../../../services/dummy-data.service';

@Component({
  selector: 'app-dummy-page1',
  templateUrl: './dummy-page1.component.html',
  styleUrls: ['./dummy-page1.component.css']
})
export class DummyPage1Component implements OnInit {

  constructor(private _dummyDataService: DummyDataService) { }

  showSpinner = true;
  showTable = false;

  public items: Dummy[] = [];

  ngOnInit(): void 
  {
    this._dummyDataService.getDummyData()
    .subscribe(response => 
      {        
        this.items = this.listAllItems(response);
        this.showSpinner = false;
        this.showTable = true;
      });
  }

  listAllItems(response: any) 
  {
    const ITEMS: Dummy[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: Dummy = {
        dest: response[i].dest,
        n: response[i].n
      };
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }
}
