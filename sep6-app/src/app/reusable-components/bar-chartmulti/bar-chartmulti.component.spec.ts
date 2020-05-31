import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartmultiComponent } from './bar-chartmulti.component';

describe('BarChartmultiComponent', () => {
  let component: BarChartmultiComponent;
  let fixture: ComponentFixture<BarChartmultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartmultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartmultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
