import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage1Component } from './weather-page1.component';

describe('WeatherPage1Component', () => {
  let component: WeatherPage1Component;
  let fixture: ComponentFixture<WeatherPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
