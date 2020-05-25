import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage3Component } from './flights-page3.component';

describe('FlightsPage3Component', () => {
  let component: FlightsPage3Component;
  let fixture: ComponentFixture<FlightsPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
