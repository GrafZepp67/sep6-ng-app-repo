import { Component, OnInit } from '@angular/core';
import { Dummy } from 'src/app/models/dummy';
import { DummyDataService } from 'src/app/services/dummy-data.service';

@Component({
  selector: 'app-section-dummy',
  templateUrl: './section-dummy.component.html',
  styleUrls: ['./section-dummy.component.css']
})
export class SectionDummyComponent implements OnInit {

  constructor(private _dummyDataService: DummyDataService) { }

  public items: Dummy[] = [];

  ngOnInit(): void 
  {
    this._dummyDataService.getDummyData()
    .subscribe(response => 
      {
        this.items = this.listAllItems(response);
      });
  }

  listAllItems(response: any) 
  {
    const ITEMS: Dummy[] = [];

    for(let i = 0; i < response.length; i++)
    {
      const ITEM: Dummy = {
        id: response[i].id,
        initials: response[i].initials,
        age: response[i].age
      };
      ITEMS.push(ITEM);
    }
    return ITEMS;
  }
}
