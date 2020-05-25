import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage4Component } from './flights-page4.component';

describe('FlightsPage4Component', () => {
  let component: FlightsPage4Component;
  let fixture: ComponentFixture<FlightsPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
