import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';

import { FlightsPage1Component } from '../../pages/flights/flights-page1/flights-page1.component';
import { FlightsPage2Component } from '../../pages/flights/flights-page2/flights-page2.component';
import { FlightsPage3Component } from '../../pages/flights/flights-page3/flights-page3.component';
import { FlightsPage4Component } from '../../pages/flights/flights-page4/flights-page4.component';
import { FlightsPage5Component } from '../../pages/flights/flights-page5/flights-page5.component';


@Component({
  selector: 'app-flights-tabgroup',
  templateUrl: './flights-tabgroup.component.html',
  styleUrls: ['./flights-tabgroup.component.css']
})
export class FlightsTabgroupComponent implements AfterViewInit {
  constructor() { }

  selectedIndex = 0;

  public activeTab: any;

  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; };
  @ViewChild( FlightsPage1Component ) flightsPage1: any;
  @ViewChild( FlightsPage2Component ) flightsPage2: any;
  @ViewChild( FlightsPage3Component ) flightsPage3: any;
  @ViewChild( FlightsPage4Component ) flightsPage4: any;
  @ViewChild( FlightsPage5Component ) flightsPage5: any;

  //Observer area start
  public indexSubject = new Subject<any>();
  public indexSubject$ = this.indexSubject.asObservable();

  public subscription = this.indexSubject$.subscribe((data: any) => 
  {
    this.activeTab = data;
    this.loadChildPageChart(this.activeTab);
  });

  public updateTabSubject(newActiveTab: any) 
  {
    this.indexSubject.next(newActiveTab);
  }
  //Observer area end
  
  onTabSelectChange(tabs : MatTabChangeEvent): void
  {
    this.activeTab = this.tabGroup.selectedIndex;
    this.updateTabSubject(this.activeTab);
  }

  loadChildPageChart(index : any)
  {
      switch(index)
      {
        case 0:
          this.flightsPage1.initComponent();
          break;

        case 1:
          this.flightsPage2.initComponent();
          break;

        case 2:
          this.flightsPage3.initComponent();
          break;

        case 3:
          this.flightsPage4.initComponent();
          break;

        case 4:
          this.flightsPage5.initComponent();
          break;
      }      
  }  

  ngAfterViewInit() 
  {    
    console.log("FLights tabgroup afterView init!")

    this.activeTab = this.tabGroup.selectedIndex;
    this.updateTabSubject(this.activeTab);
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
