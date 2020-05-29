import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFunc4ScatterchartComponent } from './weather-func4-scatterchart.component';

describe('WeatherFunc4ScatterchartComponent', () => {
  let component: WeatherFunc4ScatterchartComponent;
  let fixture: ComponentFixture<WeatherFunc4ScatterchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFunc4ScatterchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFunc4ScatterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
