import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFunc3ScatterchartComponent } from './weather-func3-scatterchart.component';

describe('WeatherFunc3ScatterchartComponent', () => {
  let component: WeatherFunc3ScatterchartComponent;
  let fixture: ComponentFixture<WeatherFunc3ScatterchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFunc3ScatterchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFunc3ScatterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
