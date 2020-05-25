import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage2Component } from './weather-page2.component';

describe('WeatherPage2Component', () => {
  let component: WeatherPage2Component;
  let fixture: ComponentFixture<WeatherPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
