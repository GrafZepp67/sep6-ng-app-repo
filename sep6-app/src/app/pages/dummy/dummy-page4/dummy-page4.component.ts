import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-page4',
  templateUrl: './dummy-page4.component.html',
  styleUrls: ['./dummy-page4.component.css']
})
export class DummyPage4Component implements OnInit {

  constructor() { }

  showSpinner = true;
  showTable = false;

  ngOnInit(): void {
  }

}
