import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage5Component } from './flights-page5.component';

describe('FlightsPage5Component', () => {
  let component: FlightsPage5Component;
  let fixture: ComponentFixture<FlightsPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
