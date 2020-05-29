import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManFunc2BarchartComponent } from './man-func2-barchart.component';

describe('ManFunc2BarchartComponent', () => {
  let component: ManFunc2BarchartComponent;
  let fixture: ComponentFixture<ManFunc2BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManFunc2BarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManFunc2BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
