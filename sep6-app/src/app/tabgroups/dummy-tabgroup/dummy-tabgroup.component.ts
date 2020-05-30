import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DummyPage1Component } from '../../pages/dummy/dummy-page1/dummy-page1.component'

@Component({
  selector: 'app-dummy-tabgroup',
  templateUrl: './dummy-tabgroup.component.html',
  styleUrls: ['./dummy-tabgroup.component.css']
})
export class DummyTabgroupComponent implements AfterViewInit {

  constructor() {}

  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; };
  @ViewChild('tab1') tab1: any;
  @ViewChild( DummyPage1Component ) childPage1: any;

  ngAfterViewInit() {
    console.log('Selected tab index after init', this.tabGroup.selectedIndex);
    this.childPage1.test();
  }

  onTabSelectChange(tabChange: MatTabChangeEvent): void
  {
    //console.log('tabChangeEvent => ', tabChange);
    console.log('Selected tab index on change:', tabChange.index);
  }

  //Observable method?


}
