import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTabgroupComponent } from './weather-tabgroup.component';

describe('WeatherTabgroupComponent', () => {
  let component: WeatherTabgroupComponent;
  let fixture: ComponentFixture<WeatherTabgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTabgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTabgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
