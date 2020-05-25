import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage1Component } from './flights-page1.component';

describe('FlightsPage1Component', () => {
  let component: FlightsPage1Component;
  let fixture: ComponentFixture<FlightsPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
