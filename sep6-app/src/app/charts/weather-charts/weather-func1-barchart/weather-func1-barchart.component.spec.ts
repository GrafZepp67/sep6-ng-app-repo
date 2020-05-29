import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFunc1BarchartComponent } from './weather-func1-barchart.component';

describe('WeatherFunc1BarchartComponent', () => {
  let component: WeatherFunc1BarchartComponent;
  let fixture: ComponentFixture<WeatherFunc1BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFunc1BarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFunc1BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
