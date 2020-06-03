import { Component, OnInit } from '@angular/core';
import { SectionHomeComponent } from '../section-home/section-home.component';

@Component({
  selector: 'app-section-dashboard',
  templateUrl: './section-dashboard.component.html',
  styleUrls: ['./section-dashboard.component.css']
})
export class SectionDashboardComponent implements OnInit {

  selectedLink: any;

  constructor(private homeComponent: SectionHomeComponent) 
  {
    homeComponent.linkSubject.subscribe((data) => {
      this.selectedLink = data;
    })
  } 

  ngOnInit(): void 
  {
    this.setActiveTabGroup("home");
  }

  setActiveTabGroup(value : string)
  {
    this.selectedLink = value;
  }
}
