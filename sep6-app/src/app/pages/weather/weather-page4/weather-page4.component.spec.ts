import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPage4Component } from './weather-page4.component';

describe('WeatherPage4Component', () => {
  let component: WeatherPage4Component;
  let fixture: ComponentFixture<WeatherPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
