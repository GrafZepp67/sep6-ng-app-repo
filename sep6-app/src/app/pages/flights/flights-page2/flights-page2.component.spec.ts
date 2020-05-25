import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsPage2Component } from './flights-page2.component';

describe('FlightsPage2Component', () => {
  let component: FlightsPage2Component;
  let fixture: ComponentFixture<FlightsPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
