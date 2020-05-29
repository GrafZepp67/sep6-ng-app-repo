import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManFunc3BarchartComponent } from './man-func3-barchart.component';

describe('ManFunc3BarchartComponent', () => {
  let component: ManFunc3BarchartComponent;
  let fixture: ComponentFixture<ManFunc3BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManFunc3BarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManFunc3BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
