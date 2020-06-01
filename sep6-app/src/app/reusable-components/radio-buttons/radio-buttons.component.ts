import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent implements OnInit {

  constructor() { }

  
  public selectedOption: string;
  public options: string[] = ['Frequency', 'Frequency stacked', 'Stacked Percentage'];

  //Observer area start
  public optionSubject = new Subject<any>();
  public optionSubject$ = this.optionSubject.asObservable();

  public subscription = this.optionSubject$.subscribe((data: any) => 
  {
    this.selectedOption = data;
    console.log(this.selectedOption);
  });

  public updateTabSubject(newActiveLink: any) 
  {
    console.log("Subject updated!")
    this.optionSubject.next(newActiveLink);
  }
  //Observer area end

  ngOnInit(): void 
  {
    this.selectedOption = this.options[0];
    this.updateTabSubject(this.selectedOption);
  }

  radioChange($event: MatRadioChange)
  {
    this.selectedOption = $event.value;
    this.updateTabSubject(this.selectedOption);
  }
}
