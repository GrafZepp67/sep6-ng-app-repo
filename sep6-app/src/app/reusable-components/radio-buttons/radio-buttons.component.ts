import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent implements OnInit {

  constructor() { }

  selectedOption: string;
  options: string[] = ['Frequency', 'Frequency stacked', 'Stacked Percentage'];

  ngOnInit(): void {
    this.selectedOption = this.options[0];
  }

}
