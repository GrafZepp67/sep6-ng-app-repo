import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage5Component } from './weather-page5.component';

describe('WeatherPage5Component', () => {
  let component: WeatherPage5Component;
  let fixture: ComponentFixture<WeatherPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
