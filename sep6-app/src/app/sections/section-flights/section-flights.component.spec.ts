import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFlightsComponent } from './section-flights.component';

describe('SectionFlightsComponent', () => {
  let component: SectionFlightsComponent;
  let fixture: ComponentFixture<SectionFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
