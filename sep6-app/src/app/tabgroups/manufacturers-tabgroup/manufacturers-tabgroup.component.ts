import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';


import { ManufacturersPage1Component } from '../../pages/manufacturers/manufacturers-page1/manufacturers-page1.component';
import { ManufacturersPage2Component } from '../../pages/manufacturers/manufacturers-page2/manufacturers-page2.component';
import { ManufacturersPage3Component } from '../../pages/manufacturers/manufacturers-page3/manufacturers-page3.component';

@Component({
  selector: 'app-manufacturers-tabgroup',
  templateUrl: './manufacturers-tabgroup.component.html',
  styleUrls: ['./manufacturers-tabgroup.component.css']
})
export class ManufacturersTabgroupComponent implements AfterViewInit {

  constructor() { }

  public activeTab: any;

  @ViewChild('tabGroup') tabGroup: { selectedIndex: any; };
  @ViewChild( ManufacturersPage1Component ) manPage1: any;
  @ViewChild( ManufacturersPage2Component ) manPage2: any;
  @ViewChild( ManufacturersPage3Component ) manPage3: any;

  //Observer area start
  public indexSubject = new Subject<any>();
  public indexSubject$ = this.indexSubject.asObservable();

  public subscription = this.indexSubject$.subscribe((data: any) => 
  {
    this.activeTab = data;
    console.log('Observed index:', this.activeTab);
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

  ngAfterViewInit() 
  {    
    this.activeTab = this.tabGroup.selectedIndex;
    this.updateTabSubject(this.activeTab);
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
