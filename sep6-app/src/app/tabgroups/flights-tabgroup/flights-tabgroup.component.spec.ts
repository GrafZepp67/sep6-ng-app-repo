import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsTabgroupComponent } from './flights-tabgroup.component';

describe('FlightsTabgroupComponent', () => {
  let component: FlightsTabgroupComponent;
  let fixture: ComponentFixture<FlightsTabgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsTabgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsTabgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
