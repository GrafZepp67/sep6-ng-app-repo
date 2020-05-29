import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFunc2ScatterchartComponent } from './weather-func2-scatterchart.component';

describe('WeatherFunc2ScatterchartComponent', () => {
  let component: WeatherFunc2ScatterchartComponent;
  let fixture: ComponentFixture<WeatherFunc2ScatterchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFunc2ScatterchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFunc2ScatterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
