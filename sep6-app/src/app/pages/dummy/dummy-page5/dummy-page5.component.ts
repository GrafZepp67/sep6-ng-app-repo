import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-page5',
  templateUrl: './dummy-page5.component.html',
  styleUrls: ['./dummy-page5.component.css']
})
export class DummyPage5Component implements OnInit {

  constructor() { }

  showSpinner = true;
  showChart = false;

  ngOnInit(): void {
  }

}
