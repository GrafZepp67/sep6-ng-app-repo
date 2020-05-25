import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage3Component } from './weather-page3.component';

describe('WeatherPage3Component', () => {
  let component: WeatherPage3Component;
  let fixture: ComponentFixture<WeatherPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
