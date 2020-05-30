import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';

import { WeatherPage1Component } from '../../pages/weather/weather-page1/weather-page1.component';
import { WeatherPage2Component } from '../../pages/weather/weather-page2/weather-page2.component';
import { WeatherPage3Component } from '../../pages/weather/weather-page3/weather-page3.component';
import { WeatherPage4Component } from '../../pages/weather/weather-page4/weather-page4.component';

@Component({
  selector: 'app-weather-tabgroup',
  templateUrl: './weather-tabgroup.component.html',
  styleUrls: ['./weather-tabgroup.component.css']
})
export class WeatherTabgroupComponent implements AfterViewInit {

  constructor() { }

  public activeTab: any;

  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; };
  @ViewChild( WeatherPage1Component ) weatherPage1: any;
  @ViewChild( WeatherPage2Component ) weatherPage2: any;
  @ViewChild( WeatherPage3Component ) weatherPage3: any;
  @ViewChild( WeatherPage4Component ) weatherPage4: any;

  //Observer area start
  public indexSubject = new Subject<any>();
  public indexSubject$ = this.indexSubject.asObservable();

  public subscription = this.indexSubject$.subscribe((data: any) => 
  {
    this.activeTab = data;
    console.log('Observed index:', this.activeTab);

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
          this.weatherPage1.initComponent();
          break;

        case 1:
          this.weatherPage2.initComponent();
          break;

        case 2:
          this.weatherPage3.initComponent();
          break;

        case 3:
          this.weatherPage4.initComponent();
          break;
      }      
  }  

  ngAfterViewInit() 
  {    
    this.activeTab = this.tabGroup.selectedIndex;
    this.updateTabSubject(this.activeTab);
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}